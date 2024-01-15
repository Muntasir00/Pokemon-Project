import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Menu from './component/Menu.jsx';
import './assets/styles/style.css';
import Home from './pages/Home.jsx';
import AllPokemon from './pages/AllPokemon.jsx';

const App = () => {
  

  return (
    
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-pokemon" element={<AllPokemon />} />
      </Routes>

    
  );
};

export default App;
