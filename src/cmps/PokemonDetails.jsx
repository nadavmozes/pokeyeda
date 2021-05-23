import React, { useState, useEffect } from 'react'
import { pokemonService } from '../services/PokemonService'

// import axios from 'axios'


export function PokemonDetails(props) {
    const [pokemonDetail, setPokemonDetail] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            const { id } = props.match.params
            const pokemon = await pokemonService.getById(id)
            setPokemonDetail(pokemon);
        }
        fetchPokemon()
    }, [props.match.params])
    // console.log('res', pokemonDetail.abilities)
    if (!pokemonDetail) return null
    return (
        <>

            <div className="pokemon-details">
                <h1 className="name">
                    {pokemonDetail.name}
                </h1>
                <p>
                    {pokemonDetail.id}
                </p>
                <img src={pokemonDetail.sprites.other.dream_world.front_default} alt={pokemonDetail.name} />
                <h3 className="models-header">Game Models</h3>
                <div className="pokemon-game">
                    <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
                    <img src={pokemonDetail.sprites.back_default} alt={pokemonDetail.name} />
                </div>
                <button className="back-btn" onClick={() => props.history.push('/')}>Back to list</button>

            </div>
        </>
    )
}