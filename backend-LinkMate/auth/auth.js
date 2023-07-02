const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
    signAccessToken,
    verifyAccessToken,
} = require("../middleware/jwtHelper");

const User = db.user;
const List = db.list;
const UserList = db.userList;

exports.signup = async (req, res) => {
    try {
        const { username, email, password, phone_number } = req.body;

        const hashPassword = await bcryptjs.hash(password, 8);

        const user = await User.create({
            username,
            email,
            password: hashPassword,
            phone_number,
        });
        res.status(201).json({
            msg: "User create successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};

exports.signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: { username: username },
        });
        if (!user) {
            return res.status(401).json({
                msg: "User not found",
            });
        }

        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                msg: "Invalid Password",
            });
        }

        const accessToken = await signAccessToken(user.id);

        res.status(200).json({
            msg: "User logged in successfully",
            access_token: accessToken,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: error,
        });
    }
};

exports.profile = async (req, res) => {
    try {
        verifyAccessToken(req, res, async (err) => {
            if (err) {
                return res.status(401).json({
                    error: "Unauthorized",
                });
            }

            const userId = req.payload.aud;

            const user = await User.findOne({
                where: {
                    id: userId,
                },
                include: [
                    {
                        model: List,
                        through: UserList,
                        attributes: ["url_short"],
                    },
                ],
            });

            if (!user) {
                return res.status(401).json({
                    message: "User not found",
                });
            }

            if (user) {
                const result = {
                    username: user.username,
                    email: user.email,
                    phone_number: user.phone_number,
                    lists: user.lists,
                };
                res.status(200).json({
                    message: "User lists fetched successfully",
                    data: result,
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

exports.linkProfile = async (req, res) => {
    try {
        verifyAccessToken(req, res, async (err) => {
            if (err) {
                return res.status(401).json({
                    error: "Unathorized",
                });
            }

            const userId = req.payload.aud;

            const user = await User.findOne({
                where: {
                    id: userId,
                },
                include: [
                    {
                        model: List,
                        through: UserList,
                        attributes: ["url_long", "url_short"],
                    },
                ],
            });

            if (!user) {
                return res.status(401).json({
                    message: "User not found",
                });
            }

            if (user && user.lists.length > 0) {
                const result = {
                    username: user.username,
                    url_long: user.lists[0].url_long,
                    url_short: user.lists[0].url_short,
                    createdAt: user.lists[0].UserList.createdAt,
                };

                res.status(200).json({
                    message: "Link fetched successfully",
                    data: result,
                });
            } else {
                res.status(404).json({
                    message: "Link not found",
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

exports.createShortLink = async (req, res) => {
    try {
        verifyAccessToken(req, res, async (err) => {
            if (err) {
                return res.status(401).json({
                    error: "Unathorized" + err.message,
                });
            }

            const userId = req.payload.aud;

            const user = await User.findOne({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                return res.status(401).json({
                    message: "User not found",
                });
            }

            const { url_long, url_short } = req.body;

            const list = await List.create({ url_long, url_short });

            await UserList.create({ id_user: userId, id_list: list.id });

            const baseUrl = req.protocol + "://" + req.get("host");
            const fullUrl = `${baseUrl}/api/auth/linkmate/${url_short}`;

            res.status(201).json({
                msg: "Link successfully created",
                data: { ...list.toJSON(), url_short: fullUrl },
            });
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

exports.redirectUrl = async (req, res) => {
    try {
        const { url_short } = req.params;

        const link = await List.findOne({ where: { url_short: url_short } });

        if (!link) {
            return res.status(404).json({
                msg: "Short URL not found",
            });
        }

        res.redirect(link.url_long);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};

exports.logout = async (req, res) => {
    res.cookie("refreshToken", "", {
        expires: new Date(0),
    });

    res.json({
        success: true,
    });
};
