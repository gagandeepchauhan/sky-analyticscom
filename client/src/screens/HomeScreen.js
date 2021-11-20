import React,{useState} from 'react'

import Header from '../components/Header'
import SearchResult from '../components/SearchResult'

export default function HomeScreen() {
	const [keyword,setKeyword] = useState('')
	const [result,setResult] = useState(null)

	return (
		<div>
			<Header 
				keyword={keyword} 
				setKeyword={setKeyword} 
				setResult={setResult}
			/>
			<SearchResult result={result} />
		</div>
	)
}