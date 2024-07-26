import React from 'react';

const HomeView = ({ dishes }) => {
  return (
    <div className="home__view">
      <h1 className='home__title'> Página de Inicio</h1>
      <ul className="dish-list">
        {dishes.map((dish) => (
          <li key={dish.id} className="dish-card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Precio: ${dish.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeView;

      
  