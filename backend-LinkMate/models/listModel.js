module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define(
        "list",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            url_long: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            url_short: {
                type: DataTypes.TEXT,
                allowNull: false,
                unique: true,
            },
        },
        {
            timestamps: true,
        }
    );
    // List.beforeCreate((list) => {
    //     const shortUrl = generateShortUrl(12);
    //     list.url_short = shortUrl;
    // });

    return List;
};

// function generateShortUrl(length) {
//     const characters =
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let shortUrl = "";
//     for (let i = 0; i < length; i++) {
//         shortUrl += characters.charAt(
//             Math.floor(Math.random() * characters.length)
//         );
//     }
//     return shortUrl;
// }
