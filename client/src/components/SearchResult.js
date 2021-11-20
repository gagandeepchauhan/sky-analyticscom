import React from 'react'

export default function SearchResult({result}) {
	return (
		<div className="search-result">
			{result ?
				<>
					<div className="match-type styled-scrollbar">
					<h4>Complete Match - <small>( {result?.completeMatch?.length} Results )</small></h4>
					{result?.completeMatch?.length===0 && <small className="no-match" >No Match Found</small>}
					<ul>
						{result?.completeMatch?.map(item=>(
							<li key={item.id} className="search-item" >{item.keyword}</li>
						))}
					</ul>
					</div>
					<div className="match-type styled-scrollbar">
					<h4>Partial Match - <small>( {result?.partialMatch?.length} Results )</small></h4>
					{result?.partialMatch?.length===0 && <small className="no-match" >No Match Found</small>}
					<ul>
						{result?.partialMatch?.map(item=>(
							<li key={item.id} className="search-item" >{item.keyword}</li>
						))}
					</ul>
					</div>
				</>
				:
				<h5>Here goes search result</h5>
			}
		</div>
	)
}