module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Email address is already in use"
            },
            validate: {
                isEmail: true
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return User;
}