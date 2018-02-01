import React from 'react';
// import TodoContainer from './Todo/TodoContainer';
import ClientContainer from './Client/ClientContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <ClientContainer />
      </div>);
  }
}
