const db = require("../models");

const User = db.user;
const List = db.list;
const userList = db.userList;

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, phone_number } = req.body;
        const user = await User.create({
            username,
            email,
            password,
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

exports.getAllUser = async (req, res) => {
    try {
        const user = await User.findAll({});

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};

exports.editUser = async (req, res) => {
    try {
        const id_user = req.params.id;
        const { email, username, phone_number } = req.body;

        const user = await User.findByPk(id_user);

        if (!user) {
            return res.status(404).json({
                error: "User not found",
            });
        }

        user.email = email;
        user.username = username;
        user.phone_number = phone_number;

        await user.save();

        res.status(200).json({
            msg: "Updated User successfully",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id_user = req.params.id;

        const user = await User.findByPk(id_user);

        if (!user) {
            return res.status(404).json({
                error: "User Not found",
            });
        }

        await user.destroy();

        // const userListIds = user.lists.map((list) => list.id);
        // userList.destroy({
        //     where: {
        //         id_user: user.id,
        //         id_list: {
        //             in: userListIds,
        //         },
        //     },
        // });

        res.json({
            msg: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};
