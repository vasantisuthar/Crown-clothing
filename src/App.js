import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
