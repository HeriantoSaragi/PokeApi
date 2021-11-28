import React from 'react';
import { Link } from 'react-router-dom';
 import './style.css';

function Card({ pokemon, id }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                <Link to={"/pokemon/" + id} state={{pokemon}}>{pokemon.name}</Link>
            </div>
        </div>
    );
}

export default Card;
