import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/reserve">Reserva</Link>
        </li>
        <li>
          <Link to="/about">Conócenos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;