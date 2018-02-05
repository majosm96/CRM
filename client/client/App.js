import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import ClientContainer from './Client/ClientContainer'
import CompanyContainer from './Company/CompanyContainer'

const App = () => {
  return ( 
    <div>
      <header>
        <nav className="Intro-nav ">
          <h2 className=" sidebar__title">CRM</h2>
          <div className="Intro-nav__item">
            <Link className="Intro-nav__item-link vertical-align" to='/Clients'>Clients</Link>
          </div>
          <div className="Intro-nav__item">
            <Link className="Intro-nav__item-link"to='/Companies'>Companies</Link>
          </div>
        </nav>
      </header>
      {/* <section>
      <h1 className="h-section">CRM</h1>
      </section> */}
      <main className="main--open">
        {/* <section className="dashboard">
          <div className="dashboard-img">
            <img src="./imgs/notification.png"></img>
          </div>
          <div className="dashboard-img">
            <img src="./imgs/addclient.png"></img>
          </div>
          <div className="dashboard-img">
            <img src="./imgs/search.png"></img>
          </div>
          <div className="dashboard-img dashboard-img-user">
            <img src="./imgs/avatar-sample.png"></img>
          </div>
        </section> */}
        <Switch> 
          <Route path="/Clients" component={ClientContainer} />
          <Route path="/Companies" component={CompanyContainer} />
        </Switch>
      </main>
    </div>
  )
}

export default App;