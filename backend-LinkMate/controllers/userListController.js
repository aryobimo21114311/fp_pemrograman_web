const db = require("../models");

const User = db.user;
const List = db.list;
const UserList = db.userList;

exports.createUserList = async (req, res) => {
    try {
        const { id_user, id_list } = req.body;

        const user = await User.findByPk(id_user);
        if (!user) {
            return res.status(404).json({
                error: "User not found",
            });
        }

        const list = await List.findByPk(id_list);
        if (!list) {
            return res.status(404).json({
                error: "List not found",
            });
        }

        const userList = await UserList.create({ id_user, id_list });

        res.status(201).json({
            msg: "UserList successfully created",
            data: userList,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
};

exports.getAllUserList = async (req, res) => {
    try {
        const user = await User.findAll({
            include: [
                {
                    model: List,
                    through: UserList,
                    attributes: ["url_short"],
                },
            ],
        });
        res.status(200).json({
            user,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
};
