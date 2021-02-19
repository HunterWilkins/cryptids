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
            type: DataTypes.TEXT
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
        magicType: {
            type: DataTypes.STRING
        },
        bodyType: {
            type: DataTypes.STRING
        }
    });

    return Cryptid;
}