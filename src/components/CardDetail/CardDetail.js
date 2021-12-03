import { useLocation, useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import { getAllPokemon, getDetailPokemon} from '../../services/pokemon';
import typeColors from "../../services/typeColors";
import axios from "axios";
import { Link } from 'react-router-dom';

function CardDetail({methods}) {
    const location = useLocation();
    const {pokemon, isPokemons} = location.state;
    let { id } = useParams();
    const [name, setName] = useState(pokemon.name);
    
    const onHandleRenamed = async () => {
        const result = await methods.renameMyPokemons(id);
        setName(result);
    }

    return (
        
        <div className="centerDetail" >
            <div className="Card__img">
                <img src={pokemon ? pokemon.sprites.front_default : ''} alt="" />
            </div>
            <div className="Card__name">
                {name}
            </div>
            <div className="Card__types">
                {
                    pokemon ?
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    }) :
                    <div>Loading ....</div>
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Id</p>
                    <p>{pokemon.id}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon ? pokemon.weight : ''}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon ? pokemon.height : ''}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon ? pokemon.abilities[0].ability.name : ''}</p>
                </div>
                {
                    isPokemons ?
                    <div>
                        <button onClick={() => methods.catchPokemons(id)}>
                            Catch
                        </button>
                    </div>
                    :
                    <div>
                    <button onClick={() => onHandleRenamed(id)}>
                        Rename
                    </button>
                    <button onClick={() => methods.deleteMyPokemons(id)}>
                        Release
                    </button>
                    </div>
                }
                <div className="Card__name">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/mypokemons"}>My Pokemons</Link>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;