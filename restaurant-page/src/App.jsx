import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ReserveView from './views/ReserveView';
import AboutView from './views/AboutView';
import TheHeader from './components/header/TheHeader';
import './styles.scss'

const dishes = [
  {
    id: 1,
    name: 'Plato 1',
    description: 'Este es el plato 1',
    price: 10,
  },
  {
    id: 2,
    name: 'Plato 2',
    description: 'Este es el plato 2',
    price: 20,
  },
  {
    id: 3,
    name: 'Plato 3',
    description: 'Este es el plato 3',
    price: 15,
  },
]
const App = () => {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeView dishes={dishes}/>} />
        <Route path="/reserve" element={<ReserveView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;