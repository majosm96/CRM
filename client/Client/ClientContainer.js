import React from 'react';
import ClientTable from './ClientTable';

class ClientContainer extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };

    console.log(this.state.clients);

    this.render = this.render.bind(this);
  }

  // Did Mount
  componentDidMount() {
    const url = 'http://localhost:3000/clients';
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({ clients: data });
      });
  }

  // Render App
  render() {
    return (
      <div>
        <h1>Clients</h1>
        <div>
          <ClientTable clients={this.state.clients} />
        </div>
      </div>
    );
  }
}

export default ClientContainer;
