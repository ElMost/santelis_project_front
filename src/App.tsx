import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
      </BrowserRouter>
      

      <h1>Bienvenue sur Santelis</h1>
    </div>
  );
}

export default App;
