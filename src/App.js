import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage.component';

const HatsPage=() =>{
  return(
    <h1>this is hats page</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
