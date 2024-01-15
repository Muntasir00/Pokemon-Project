// components/Menu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/style.css';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/all-pokemon">All Pokemon</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
