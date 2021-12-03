import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div className="Navbar" >
            <div>
                Pokemon API
            </div>
            <div>
                <Link to="/mypokemons">My Pokemon</Link>
                <Link to="/">Pokemons</Link>
            </div>
        </div>
    );
}

export default Navbar;
