import React, { useEffect, useState } from 'react'
import Card from '../../molecules/Card'
import { emptyResult, getPokemonsPaginated } from '../../../server/pokemons'

import './styles.scss'

function InfiniteScroll() {
	const [pokemons, setPokemons] = useState(emptyResult)
	useEffect(() => {
		getPokemons()
	}, [])
	
	async function getPokemons(){
		const response = await getPokemonsPaginated(20, 0)
		setPokemons(response)
	}
  
	return (
		<ul className='InfiniteScroll'>
			{pokemons.results.map((item, index)=>(
				<Card key={index} pokName={item.name}/>
			))}
		</ul>
	)
}

export default InfiniteScroll