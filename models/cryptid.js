module.exports = function(sequelize, DataTypes) {
    let Cryptid = sequelize.define("Cryptid", {
        gender: {
            type: DataTypes.STRING,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        body: {
            type: DataTypes.STRING
        },

        threat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        img: {
            type: DataTypes.STRING
        },

        height: {
            type: DataTypes.INTEGER
        },
        
        weight: {
            type: DataTypes.INTEGER
        },

        type: {
            type: DataTypes.STRING
        }
    });

    return Cryptid;
}