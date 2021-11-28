import { useLocation, useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import { getAllPokemon, getDetailPokemon} from '../../services/pokemon';
import typeColors from "../../services/typeColors";
import { Link } from 'react-router-dom';

function CardDetail(props) {
    const location = useLocation();
    const {pokemon} = location.state;
    console.log(pokemon);
    let { id } = useParams();
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
        async function fetchData() {
        let response = await getAllPokemon(initialURL)
        await loadPokemon(response.results);
        setLoading(false);
        }
        fetchData();
    }, [])

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getDetailPokemon(pokemon)
        console.log(getDetailPokemon);
         return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }
    return (
        
        <div className="centerDetail" >
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
                <div className="Card__name">
                    <Link to={"/"}>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;