import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/style.css';

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen,setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name:"", 
    species:"", 
    img:"",
    hp:"",
    attack:"",
    defense:"",
    type:"",
  })



  

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name:pokemonName, 
          species:response.data.species.name, 
          img:response.data.sprites.front_default,
          hp:response.data.stats[0].base_stat,
          attack:response.data.stats[1].base_stat,
          defense:response.data.stats[2].base_stat,
          type:response.data.types[0].type.name,
        })
      })
      setPokemonChosen(true)

  };



    return (
        <div>
            <div className='App'>
      <div className='TitleSection'>
        
        <h1>PokeMon Project Assessment</h1>
        <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
        <button onClick={searchPokemon}>Search</button>
      </div>

      <div className='displaydata'>
        {!pokemonChosen ? (
        <h1>Search Pokemon</h1>) : (
        <>
        <img src={pokemon.img} alt="No Image" />
        <div className='container'>
        <h1><strong>{pokemon.name}</strong> </h1>
        <p><strong>Species: </strong>{pokemon.species}</p>
        <p><strong>Type: </strong>{pokemon.type}</p>
        <p><strong>HP: </strong>{pokemon.hp}</p>
        <p><strong>Attack: </strong>{pokemon.attack}</p>
        <p><strong>Defence: </strong>{pokemon.defense}</p>
        </div>

        </>
        
        )}
      </div>

      <Link to="/all-pokemon">
      <button>All Pokemons</button>
      </Link>
      
      

    </div>
        </div>
    );
};

export default Home;