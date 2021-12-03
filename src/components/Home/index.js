import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';


function Home() {
    const navigate = useNavigate();

    const catchPokemons = (id) => {
      axios.get(`http://localhost:3200/pokemons/${id}/catch`).then(res => res.data.isCatched ?  alert(`Pokemon ${res.data.name} is catched`) : alert(`Pokemon ${res.data.name} is not catched`));
    }

    const deleteMyPokemons = (id) => {
      axios.delete(`http://localhost:3200/mypokemons/${id}`).then(res => 
        res.data.isDeleted ? successDeleted(res.data) : alert(`Pokemon ${res.data.name} is not deleted`)
        );
    }

    const successDeleted = (pokemon) => { 
      alert(`Pokemon ${pokemon.name} is deleted`)
      navigate("/mypokemons") 
    }

    const renameMyPokemons =  async (id) => {
      const result = await axios.put(`http://localhost:3200/mypokemons/${id}`);
      alert(`Pokemon ${result.data.name} is renamed`);
      return result.data.name;
    }

    return (
        <div>
              <Navbar />
              <Routes>
                <Route path="/pokemon/:id" element={<CardDetail methods={{deleteMyPokemons: deleteMyPokemons, catchPokemons: catchPokemons, renameMyPokemons: renameMyPokemons}}/>} />
                <Route path="/" element={<Main isPokemons={true}/>} />
                <Route path={"/mypokemons"} element={<Main isPokemons={false}/>}/>
              </Routes>  
        </div>
    )
}

export default Home;