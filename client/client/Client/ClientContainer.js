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
      newClientCompany: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
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

    console.log('testing')
    console.log(client)
    //this.setState({ newTodoVal: '' });
  }

  showForm() {
    console.log('you are in')
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
        <h3 className="component__title">Clients</h3>
        <div className="section-wrap">
          <ClientForm
            // item={}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ClientTable  clients={this.props.clients} />
        </div>
        
        {/* <EmployeeTable /> */}
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
    addTodo: value => dispatch(addClient(value)),
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