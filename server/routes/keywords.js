const express = require('express')
const router = express.Router()

const { Op, Sequelize } = require("sequelize")

// requiring Keyword model
const Keyword = require('../models/Keyword')

router.get('/keywords',async (req,res)=>{
	const { keyword } = req.query
	console.log(keyword)
	if(!keyword){
		const keywords = await Keyword.findAll({})
		return res.json({
				success: true,
				desc: {
					keywords
				}
			})
	}
	try{
		const complete_match_query = {
				keyword:{
					[Op.or]:[
						{[Op.iLike]:keyword}, // exact equal (case insensitive)
						{[Op.iLike]:`%${keyword}%`}, // occurs as a substring
					]
				}
			}
		const partial_match_query = {
				keyword:{
					[Op.match]: Sequelize.fn('to_tsquery', keyword.split(' ').join(' & ')),
					[Op.notILike]: `%${keyword}%`
				}
			}
		const completeMatch = await Keyword.findAll({where:complete_match_query})
		const partialMatch = await Keyword.findAll({where:partial_match_query})
		return res.json({
			completeMatch,
			partialMatch
		})
	}catch(err){
		return res.json({ error: err.message })
	}
})
router.post('/keywords',async (req,res)=>{
	const { keyword, country, difficulty, volume, cpc, clicks, cps } = req.body

	if(!keyword){
		return res.sendStatus(422)
	}
	try{
		const keywordData = await Keyword.create({ keyword, country, difficulty, volume, cpc, clicks, cps })
		return res.json({
			success:true,
			desc:{
					keyword:keywordData
				}
		})
		return res.sendStatus(404)
	}catch(err){
		return res.json({ error: err.message })
	}
})


module.exports = router