import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokeball from '../assets/imgs/pokeball.png';


export function PokemonPreview(props) {
    const [catchPokemon, setCatchPokemon] = useState(false)
    // const [value, setValue] = useState("")

    const dataToStore = (catchPokemon) => {
        localStorage.setItem("storedData", JSON.stringify(catchPokemon));
    }
    useEffect(() => {
        if (localStorage.getItem("storedData")) {
            setCatchPokemon(JSON.parse(localStorage.getItem("storedData")));
        }
    }, [])

    const onCatch = () => {
        setCatchPokemon(!catchPokemon.isCaught)
        dataToStore(catchPokemon)
    }
    // console.log('res', props.pokemon)
    if (!props.pokemon) return  null
    return (
        <div>

            <div className="pokemon-card">
                <div className="header">
                    <p className="pokemon-number">{props.pokemon.id}</p>
                    <p className="pokemon-name">{props.pokemon.name}</p>
                    <img onClick={() => onCatch()} src={pokeball} alt="pokeball" className={`poke-ball poke-catch-${catchPokemon}`} />
                </div>
                {props.pokemon && props.pokemon.types.map((item, index) => (<p className={item.type.name} key={index}>{item.type.name}</p>))}
                <img src={props.pokemon.sprites.other.dream_world.front_default} alt={props.pokemon.name} />
                <Link to={`/${props.pokemon.id}`} key={props.index}>
                    <Button variant="danger">
                        Pokemon Details
                                 </Button>{' '}
                </Link>

            </div>
            {/* <input value={value} onChange={e => setValue(e.target.value)} /> */}
    
        </div>
    )
}