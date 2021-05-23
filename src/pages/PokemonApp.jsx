import React, { useState, useEffect, useMemo } from 'react'
import { pokemonService } from '../services/PokemonService'
// import { pokemonTCG } from '../services/PokemonTCGService'
import { PokemonList } from '../cmps/PokemonList'
export const PokemonApp = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])
    // const [pokemonCard, setPokemonCard] = useState([])

    useEffect(() => {
        pokemonData()
        // pokemonCards()
    }, [])
    async function pokemonData() {
        const pokemonObj = await pokemonService.fetchPokemon()
        Promise.all(pokemonObj)
            .then((results) => {
                console.log('pokemon data:', results)
                setPokemonInfo(results)
            })

    }

    // async function pokemonCards() {
    //     const card = await pokemonTCG.PokemonCards()
    //     console.log('pokemon data:', card.data.data[0])
    //     setPokemonCard(card)
    // }
    // Filter
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const pokemonsForDisplay = useMemo(() => {
        return !searchTerm ? pokemonInfo : pokemonInfo.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }, [searchTerm, pokemonInfo])

    return (
        <>
            <div className="App">
                <input
                    className="filter"
                    type="text"
                    placeholder="Search for a Pokemon"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            {  pokemonInfo && <PokemonList pokemonsForDisplay={pokemonsForDisplay} />}
        </>
    )

}