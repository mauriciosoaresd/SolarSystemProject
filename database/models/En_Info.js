const Sequelize = require('sequelize');
const database = require('../db');
const Astro = require('./Astro');

const En_Info = database.define('en_info', {
    info: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
})

En_Info.belongsTo(Astro, {
    constraint: true,
    foreignKey: 'id'
})

module.exports = En_Info;