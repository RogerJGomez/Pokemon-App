import React from 'react'

export default function PokemonList({ pokemons }) {
    return (
        <div className="flex-container">
            {pokemons.map( pokemon => (
                <div className="flex-item" key = {pokemon}>
                    <img src="https://i.ebayimg.com/images/g/huAAAOSwT6pV2hB6/s-l300.jpg" alt="pokemon"/>
                    <h4>{pokemon}</h4>
                </div>
                ) 
            )}
        </div>
    )
}
