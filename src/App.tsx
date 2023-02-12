import React from 'react';
// import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      

      <h1>Bienvenue sur Santelis</h1>
    </div>
  );
}

export default App;
