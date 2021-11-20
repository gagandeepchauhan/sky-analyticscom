import axios from 'axios'

const baseURL = process.env.NODE_ENV==="development" ?
				"http://localhost:3001" :
				"https://sky-analyticscom.herokuapp.com"

export default axios.create({
	baseURL,
	headers:{
		"Content-Type": "application/json"
	}
})
