import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/style.css';

const AllPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(response)
        setPokemonData(response.data.results); 
      } catch (error) {
        console.error('Error fetching all Pokémon:', error);
      }
    };

    fetchAllPokemon();
  }, []); 

  return (
    <div className='App'>
    <div className='container list'>
      <h2>List of all Pokemon:</h2>
      <ul className='circle' >
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default AllPokemon;
