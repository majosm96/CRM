import React, {Component} from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types';

import ClientTable from './ClientTable'
import getClient from './Actions'
//import uuid from 'uuid/v1';

class ClientContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.loadData()
  }

  render() {
    return (
      <div>
        <h3 className="component__title">Clients</h3>
        <div className="section-wrap">
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
}

ClientContainer.defaultProps = {
  clients: [],
  loadData: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer)