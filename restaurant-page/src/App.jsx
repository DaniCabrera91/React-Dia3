import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ReservationView from './views/ReserveView';
import AboutView from './views/AboutView';
import TheHeader from './components/header/TheHeader';

const App = () => {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/reserve" element={<ReservationView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;