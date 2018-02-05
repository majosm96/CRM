import React, {Component} from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types';

import ClientTable from './ClientTable'
import ClientForm from './ClientForm'
import { getClient, addClient } from './Actions'
//import uuid from 'uuid/v1';

class ClientContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newClientName: '',
      newClientEmail:  '',
      newClientPhone: '',
      newClientPosition: '',
      newClienCompany: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount(){
    this.props.loadData()
  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit() {
    let client = this.state;
    this.props.addClient(client);
    this.setState({ newTodoVal: '' });
  }

  render() {
    return (
      <div>
        <h3 className="component__title">Clients</h3>
        <div className="section-wrap">
          <ClientForm />
          <ClientTable  clients={this.props.clients} />
        </div>
        
        {/* <EmployeeTable /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // loading: state.loading,
    clients: state.Client.clients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getClient())
    },
  }
}

ClientContainer.propTypes = {
  clients: array,
  loadData: func,
  addClient: func,
}

ClientContainer.defaultProps = {
  clients: [],
  loadData: () => {},
  addClient: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer)