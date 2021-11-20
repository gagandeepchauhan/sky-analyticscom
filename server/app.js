const express = require("express")
const app = express()
const cors = require("cors")

process.env.NODE_ENV === "development" && require("dotenv").config()

const CORS_URL = process.env.CORS_URL

// database config
const db = require('./config/database')
db.authenticate()
	.then(()=>console.log('Database connected...'))
	.catch(err=>console.log('Database Error : '+err))

// requiring models
const Keyword = require('./models/Keyword')

// syncing the db
// db.sync({force:true})
// 	.then(()=>console.log('DB synced...'))
// 	.catch(err=>console.log('Sync error : '+err))

// using middlewares
app.use(express.json())
app.use(cors({
	origin: CORS_URL
}))

// using routes
app.use(require('./routes/keywords'))

app.get('/',(req,res)=>{
	res.sendStatus(200)
})



const PORT = process.env.PORT || 3001
app.listen(PORT,()=>console.log(`APP LISTENING ON PORT ${PORT}`))

