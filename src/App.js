import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import CardDetail from "./components/CardDetail/CardDetail";
import Home from "./components/Home";
import './App.css';
import MyPokemonList from "./components/MyPokemonList";

function App() {
  return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
  );
   
}

export default App;
 