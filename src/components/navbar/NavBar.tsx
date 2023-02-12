import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    const[navbar, setNavbar] = useState(false);
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow"
    
    >
      <div className=" container-fluid" >
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width={80} height={80} />
        </a>
        
        <button
            className="navbar-toggler-icon"
            type="button"
          onClick={() => setNavbar(!navbar)}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className={`collapse navbar-collapse ${navbar ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'quisommesnous'} className="nav-link">
                Qui sommes-nous
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'nosservices'} className="nav-link">
                Nos services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'notreengagement'} className="nav-link">
                Notre engagement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'postuler'} className="nav-link">
                Postuler
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <NavLink to={'/login'} className="nav-link">
                  Inscription/Connexion
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to={'/dashboard'} className="nav-link">
                  Tableau de bord
                </NavLink>
              </li>
            )}
          </ul>
          <div className="d-flex">
            <div className="nb-1 me-2">
              <NavLink to="demande" className="btn btn-danger">
                Devis gratuit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
