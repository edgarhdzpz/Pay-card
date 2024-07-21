
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Card = sequelize.define('card', {
    titular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    num_target: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    month_expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    year_expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cvv: {
        type: DataTypes.STRING,
        allowNull: false
    }
    //userId

});

module.exports = Card;