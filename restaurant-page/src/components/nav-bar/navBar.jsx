import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reserve">Reservar</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;