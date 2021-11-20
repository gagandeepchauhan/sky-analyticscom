const Sequelize = require('sequelize')
const db = require('../config/database')

const Keyword = db.define('keyword',{
	keyword:{
		type: Sequelize.STRING // note the format of datatypes
	},
	country:{
		type: Sequelize.STRING
	},
	difficulty:{
		type: Sequelize.INTEGER
	},
	volume:{
		type: Sequelize.INTEGER
	},
	cpc:{
		type: Sequelize.FLOAT
	},
	clicks:{
		type: Sequelize.INTEGER
	},
	cps:{
		type: Sequelize.FLOAT
	}
},{
	timestamps:false
})
// id and timestamps (createdAt,updatedAt) will be created by default

module.exports = Keyword