import React from 'react';
import img from '../../assets/accueil-lys.png';
import './Home.css';

const Home = () => {
  return (
    <div className="container mt-2">
      <div
        className=" justify-content-between 
         align-items-center p-0"
      >
        <div className=" col-12 md-6 mb-5">
          <h1 className="text-left text-mb-start mb-4">
            Avec <span className="text-success">Santélys.</span>
            je peux compter sur une aide à domicile de qualité 24h/24 et 7j/7
          </h1>
        </div>

        <div className="col-12 md-5 d-flex flex-column flex-md-row">
          <div className="col mb-3 mb-md-0">
            <img
            //   className="w-100"
              src={img}
              style={{
                 width: '76%',
                  backgroundColor: '#fff',
                boxShadow: '0 0 20px #000',
                borderRadius: '1%',
              }}
              alt="Fleur de lys"
            />
          </div>
          <div className="col">
            <h3>
              Découvrez les avantages de faire appel à {''}
              <span className="text-success">Santélys</span> pour l'aide à
              domicile.
            </h3>
            <p className="text-justify mb-4">
              Chaque jour, nos auxiliaires de vie vous accompagnent dans tous
              les gestes de la vie quotidienne. Nous vous proposons des
              prestations de qualité, adaptées à vos besoins et à votre budget.
            </p>
            <h3 className="text-succes">
              {' '}
              <span className="text-success">Santélys.</span>
            </h3>
            <p className="mb-0">Proffessionnels de l'aide à domicile</p>
            <p className="mb-0">Santé, bien-être et autonomie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
