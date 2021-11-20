import React,{useState,useContext} from 'react'

import api from '../api/analytics'

const ApiContext = React.createContext()

export function useApi(){
	return useContext(ApiContext)
}

export default function ApiProvider({children}){

	function getKeywords(keyword){
		return api.get(`/keywords?keyword=${keyword}`)
	}

	const data = {
		getKeywords
	}

	return <ApiContext.Provider value={data}>
		{children}
	</ApiContext.Provider>
}