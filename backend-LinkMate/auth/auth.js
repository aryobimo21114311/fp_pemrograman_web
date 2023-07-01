const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = db.user;
const List = db.list;
const UserList = db.userList;

exports.signUpPage = async (req, res) => {
    res.render("signup");
};

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

        res.redirect("/api/auth/signin");

        // res.status(201).json({
        //     msg: "User create successfully",
        //     data: user,
        // });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};
exports.signInPage = async (req, res) => {
    res.render("login");
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

        const token = jwt.sign(
            {
                user: user.id,
            },
            process.env.SECRET_TOKEN,
            {
                expiresIn: "30s",
            }
        );

        const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN, {
            expiresIn: "1d",
        });

        res.status(200).json({
            msg: "User logged in successfully",
            token: token,
            refresh_token: refreshToken,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            msg: error,
        });
    }
};

exports.userProfile = async (req, res) => {};

exports.profile = async (req, res) => {
    try {
        // VerifyToken
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (token == null) return res.status(401);

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err) return res.status(403);
            req.user = user;
        });
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

        if (!decoded) {
            return res.status(401).json({
                msg: "Invalid token",
            });
        }
        // End Verify Token

        const user = await User.findOne({
            where: {
                id: decoded.user,
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
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

exports.linkProfile = async (req, res) => {
    try {
        // VerifyToken
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (token == null) return res.status(401);

        jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
            if (err) return res.status(403);
            req.user = user;
        });
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

        if (!decoded) {
            return res.status(401).json({
                msg: "Invalid token",
            });
        }
        // End Verify Token

        const user = await User.findOne({
            where: {
                id: decoded.user,
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
                lists: user.lists,
            };
            res.status(200).json({
                message: "Link fetched successfully",
                data: result,
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
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
