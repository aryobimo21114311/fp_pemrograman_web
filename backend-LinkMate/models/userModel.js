module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING(250),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING(100),
            },
        },
        {
            timestamps: true,
        }
    );

    return User;
};
