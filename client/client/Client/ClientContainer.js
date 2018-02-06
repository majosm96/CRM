import React, {Component} from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types';

import ClientTable from './ClientTable'
import ClientForm from './ClientForm'
import { getClient, addClient, deleteClient } from './Actions'

class ClientContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newClientName: '',
      newClientEmail:  '',
      newClientPhone: '',
      newClientPosition: '',
      newClientCompany: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.singleClientView = this.singleClientView.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

    console.log(value)

  }

  handleSubmit() {
    let client = {}
    client.name = this.state.newClientName;
    client.email = this.state.newClientEmail;
    client.phone = this.state.newClientPhone;
    client.position = this.state.newClientPosition;
    client.company = this.state.newClientCompany;

    this.props.addClient(client);

    this.setState = {
      newClientName: '',
      newClientEmail:  '',
      newClientPhone: '',
      newClientPosition: '',
      newClientCompany: '',
    };
  }

  showForm() {
    console.log('CTS is working')
  }

  singleClientView() {
    console.log('its a single client view function')
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteClient(e.getAttribute('id'));
    console.log(e.getAttribute('id'))  
  }


  render() {
    return (
      <div className="">
        <div className="dashboard clearfix ">
          <div className="dashboard-img">
            <img src="./imgs/chat.png" alt="Chat" />
          </div>
          <div role="button" tabIndex={0} className="dashboard-img" onClick={this.showFrom} onKeyDown={this.showFrom} > 
            <img src="./imgs/addclient.png" alt="Add client" />
          </div>
          <div className="dashboard-img dashboard-img-user">
            <img src="./imgs/avatar-sample.png" alt="user"  />
          </div>
        </div>
        <div className="section-wrap">
          <ClientForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
          <h3 className="component__title">Clients</h3>
          <ClientTable  
            clients={this.props.clients} 
            singleClientView={this.singleClientView} 
            deleteClient={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    clients: state.Client.clients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addClient: contact => dispatch(addClient(contact)),
    loadData: () => {
      dispatch(getClient())
    },
    deleteClient: id => dispatch(deleteClient(id)),
  }
}

ClientContainer.propTypes = {
  clients: array,
  loadData: func,
  addClient: func,
  deleteClient: func,
}

ClientContainer.defaultProps = {
  clients: [],
  loadData: () => {},
  addClient: () => {},
  deleteClient: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer)