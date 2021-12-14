import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-sign-up.component';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage/>} />
        <Route exact path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
