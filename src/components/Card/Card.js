import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
 import './style.css';

function Card({ pokemon, id, isPokemons}) {
    const [selectedPokemon, SetSelectedPokemon] = useState(false)
    useEffect(() => {
        axios.get(pokemon.url).then(res => {
            SetSelectedPokemon(res.data)
        })
    }, [])
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={ selectedPokemon ?  selectedPokemon.sprites.front_default : ''} alt="" />
            </div>
            <div className="Card__name">
                {
                    isPokemons ? 
                    <Link to={"/pokemon/" + id} state={{pokemon: selectedPokemon, isPokemons}}>{selectedPokemon ? selectedPokemon.name : ''}</Link>
                    :
                    <Link to={"/pokemon/" + id} state={{pokemon: {...selectedPokemon, name: pokemon.name}, isPokemons}}>{selectedPokemon && pokemon.isRenamed ? `${selectedPokemon.name}-${pokemon.firstNumber}` : selectedPokemon.name}</Link>
                }
            </div>
        </div>
    );
}

export default Card;
