import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';
// import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className=" bg-light rounded-lg shadow  footer">
      <div className="row justify-content-between align-items-center d-flex  foot">
        <div className="col-12 col-md-6 text-center text-md-start">
          <ul className="list-unstyled  justify-content-center justify-content-md-start mb-0 text-muted">
            <li>
              <NavLink
                to="quisommesnous"
                className="bg-white rounded-lg shadow  text-muted navlink"
              >
                Qui sommes nous
              </NavLink>
            </li>
            <li>
              <NavLink
                to="nosservices"
                className="bg-white rounded-lg shadow  text-muted navlink"
              >
                Nos services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notreengagement"
                className="bg-white rounded-lg shadow  text-muted navlink"
              >
                Nous contacter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="postuler"
                className="bg-white rounded-lg shadow  text-muted navlink"
              >
                Postuler
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="col-12 col-md-4 text-center text-md-end">
          <p className="text-muted mb-3">Rejoignez nous</p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <div className="bg-white rounded-lg shadow px-3 py-1">
              <NavLink to="postuler" className="text-muted">
                Postuler
              </NavLink>
            </div>
          </div>
        </div> */}
        <div className="col-12 col-md-6 text-center text-md-end">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
        <p className="mb-0">© 2021 Santelis. Tous droits réservés.</p>
      </div>
    </footer>
    // <div>

    // </div>
  );
};

export default Footer;
