import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import { getByName } from '../../../server/pokemons'

import './styles.scss'

function Card({pokName}) {
	const [pokInfo, setPokInfo] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(()=>{
		getPokemonData()
	})

	async function getPokemonData(){
		const response = await getByName(pokName)
		setPokInfo(response)
		setIsLoading(false)
		console.log({pokInfo})
	}

	return (
		<div className='card'>
			{isLoading ? (
				<div className="card-loader">
					<Loader />
				</div>
			): (
				<>
					<p># {pokInfo.id}</p>
					<img src={pokInfo.sprites.other.dream_world.front_default} alt={pokInfo.name}  />
					<p>{pokInfo.name}</p>
				</>
			)}
		</div>
	)
}

export default Card