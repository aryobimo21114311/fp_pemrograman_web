const db = require("../models");

const User = db.user;
const List = db.list;
const UserList = db.userList;

const { Op } = require("sequelize");

exports.createList = async (req, res) => {
    try {
        const { url_long, url_short } = req.body;

        const list = await List.create({ url_long, url_short });

        res.status(201).json({
            msg: "List successfully created",
            data: list,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            error,
        });
    }
};

exports.getAllList = async (req, res) => {
    try {
        const lists = await List.findAll();
        res.status(200).json({
            lists,
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};

// Redirect short URL to long URL
exports.redirectLink = async (req, res) => {
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

exports.deleteLink = async (req, res) => {
    try {
        const id_link = req.params.id;

        const link = await List.findByPk(id_link);
        if (!link) {
            return res.status(404).json({
                error: "Link not found",
            });
        }

        await link.destroy();

        // const userListIds = link.users.map((user) => user.id);
        // const userList = await UserList.destroy({
        //     where: {
        //         id_list: link.id,
        //         id_user: {
        //             in: userListIds,
        //         },
        //     },
        // });

        // if (!userList) {
        //     throw new Error("Failed to delete use lists");
        // }

        res.json({
            msg: "Link deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
            msg: error,
        });
    }
};
