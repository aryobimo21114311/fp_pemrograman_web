module.exports = (sequelize, DataTypes) => {
    const UserList = sequelize.define(
        "UserList",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            id_user: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            id_list: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    );
    return UserList;
};
