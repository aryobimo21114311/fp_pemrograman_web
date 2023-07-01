const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected....");
    })
    .catch((err) => {
        console.log("Error", err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Make Database
db.user = require("./userModel")(sequelize, DataTypes);
db.list = require("./listModel")(sequelize, DataTypes);
db.userList = require("./userListModel")(sequelize, DataTypes);

// Define the associations between the models
db.user.belongsToMany(db.list, {
    through: db.userList,
    foreignKey: "id_user",
});

db.list.belongsToMany(db.user, {
    through: db.userList,
    foreignKey: "id_list",
});

db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log("You re-sync done!");
    })
    .catch((err) => {
        console.log("Error creating tables: ", err);
    });

module.exports = db;
