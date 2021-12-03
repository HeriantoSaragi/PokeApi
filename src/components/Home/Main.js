import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development"
import Card from "../Card";

export default function Main({isPokemons}) {
    let [pokemonList, setPokemonList] = useState(false)
    useEffect(() => {
        if(isPokemons) {
            axios.get('http://localhost:3200/pokemons').then(res => {
            setPokemonList(res.data)
            });
        } else {
            axios.get('http://localhost:3200/mypokemons').then(res => {
            setPokemonList(res.data)
            });
        }
    }, [isPokemons])
    return (
        <div className="grid-container">
            {pokemonList ? pokemonList.map((pokemon, i) => {
                return <Card key={pokemon.id} pokemon={pokemon} id={pokemon.id} isPokemons={isPokemons}/>
            }) : 
            ''
            }
        </div>
    )
}