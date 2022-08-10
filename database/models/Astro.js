const Sequelize = require('sequelize');
const database = require('../db');

const Astro = database.define('astros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    en_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    en_wiki: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pt_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pt_wiki: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

})

module.exports = Astro;