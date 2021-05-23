import React from 'react'
import { PokemonPreview } from './PokemonPreview';
export function PokemonList({ pokemonsForDisplay }) {
    return (

        <div className="pokemon-list">
            {pokemonsForDisplay && pokemonsForDisplay.map(pokemon =>
                <PokemonPreview key={pokemon.id} pokemon={pokemon} />
            )}
        </div>

    )
}

