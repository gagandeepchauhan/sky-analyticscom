import React,{useState} from 'react'

import {useApi} from '../contexts/ApiContext'

export default function Header({keyword,setKeyword,setResult}) {
	const { getKeywords } = useApi()
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState(null)

	async function handleSearch(e){
		e.preventDefault()
		try{
			setLoading(true)
			setError(null)
			const res = await getKeywords(keyword)
			setResult(res?.data)
		}catch(err){
			console.log(err.message)
			setError(err?.response?.data?.error)
		}finally{
			setLoading(false)
		}
	}

	return (
		<div className="header" align="center">
			<h1>Search for keywords</h1>
			<form onSubmit={handleSearch} >
				<input
					type="search"
					placeholder="Type your search query"
					required
					value={keyword}
					onChange={({target})=>setKeyword(target.value)}
					className="query-input"
				/>
				<button 
					type="submit" 
					className="submit-btn"
					disabled={loading}
				>
					{loading ? 'loading...' : 'search'}
				</button>
				{error &&
					<div className="error-msg">* Error - {error}</div>
				}
			</form>
		</div>
	)
}