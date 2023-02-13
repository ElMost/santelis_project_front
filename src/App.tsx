import React from 'react';
// import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
