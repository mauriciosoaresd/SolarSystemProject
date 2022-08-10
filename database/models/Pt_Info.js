const Sequelize = require('sequelize');
const database = require('../db');
const Astro = require('./Astro');

const Pt_Info = database.define('pt_info', {
    info: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }
})

Pt_Info.belongsTo(Astro, {
    constraint: true,
    foreignKey: 'id'
})

module.exports = Pt_Info;