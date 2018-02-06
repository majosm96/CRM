import React from 'react';
import { Link } from 'react-router-dom'

const HeaderContainer = () => (
  <div className="home-container">
    <Link to='/Clients' className="home-item">
      <img className="home-item__img" src="./imgs/clients2.png" alt="Add client" />
      <p>Clients</p>
    </Link>
    <Link to='/Clients' className="home-item">
      <img className="home-item__img" src="./imgs/companies2.png" alt="Add client" />
      <p>Companies</p>
    </Link>
  </div>
);


export default HeaderContainer;