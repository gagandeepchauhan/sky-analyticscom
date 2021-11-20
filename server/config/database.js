const Sequelize = require('sequelize')

/*   postgress config  */
module.exports = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)

