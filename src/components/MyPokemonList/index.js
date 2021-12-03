import { useLocation, useParams } from "react-router";
import axios from "axios";
import { getMyPokemon ,getDetailMyPokemon} from '../../services/pokemon';
import React, { useState, useEffect } from 'react';

function MyPokemonList() {
    const location = useLocation();
    const [mypokemon, setMypokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async() => {
        let response = await axios.get('http://localhost:3200/mypokemons');
        setMypokemon(response.data);
    }, [mypokemon])
    
    return(
        <div>
            <h1>My Pokemon List</h1>
            {
            mypokemon.length ? mypokemon.map((pokemon, index) => (
                <ul>
                    <li key={index}>
                        {pokemon.name}
                    </li>
                </ul>
            )) : <div>Loading</div>
            }
        </div>
    )
}

export default MyPokemonList;