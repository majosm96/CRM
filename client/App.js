import React from 'react';
import CompanyContainer from './Company/CompanyContainer';
import ClientContainer from './Client/ClientContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <CompanyContainer />
        <ClientContainer />
      </div>);
  }
}
