const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize(process.env.DB_URI, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = sequelize;