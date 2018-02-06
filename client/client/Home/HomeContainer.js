import React from 'react';
import { Link } from 'react-router-dom'

const HomeContainer = (pathClients, pathCompanies) => (
  <div className="home-container">
    <Link to={pathClients} className="home-item">
      <img className="home-item__img" src="./imgs/clients2.png" alt="Add client" />
      <h4>Clients</h4>
    </Link>
    <div className="home-item">
      <img className="home-item__img" src="./imgs/companies2.png" alt="Add client" />
      <h4>Companies</h4>
    </div>
  </div>
);


export default HomeContainer;
