import React from 'react'
import pokecenter from '../assets/imgs/pokecenter.png';
export default function Header() {
    return (
        <div className="main-header">
            <h1>
                PokeYeda
            </h1>
            <img src={pokecenter} alt="pokeball" />
        </div>
    )
}
