import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import ClientTable from './ClientTable';
import { fetchData } from './actions';

class ClientContainer extends Component {
  // State
  constructor(props) {
    super(props);

    // Medhod
    this.render = this.render.bind(this);
  }

  // Did Mount
  componentDidMount() {
    const url = 'http://localhost:3000/clients';
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        this.props.fetchData(data);
      });
  }

  // Render App
  render() {
    return (
      <div>
        <h1>Clients</h1>
        <div>
          <ClientTable clients={this.props.clients} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: value => dispatch(fetchData(value)),
  };
}

ClientContainer.propTypes = {
  clients: array,
  fetchData: func,
};

ClientContainer.defaultProps = {
  clients: [],
  fetchData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);

