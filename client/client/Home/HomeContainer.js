import React from 'react';
import { Link } from 'react-router-dom'

const HomeContainer = () => (
  <div className="home-container">
    <Link to='/Clients' className="home-item">
      <img className="home-item__img" src="./imgs/clients.png" alt="Add client" />
      <h4>Clients</h4>
    </Link>
    <div className="home-item">
      <img className="home-item__img" src="./imgs/companies.png" alt="Add client" />
      <h4>Companies</h4>
    </div>
  </div>
);


export default HomeContainer;
