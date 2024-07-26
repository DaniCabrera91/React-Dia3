import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.scss'
import HomeView from './views/HomeView'
import ContactView from './views/ContactView'
import AboutView from './views/AboutView'
import TheHeader from './components/header/TheHeader'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TheHeader />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/about" element={<AboutView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


