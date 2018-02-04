import React, {Component} from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types';

import CompanyTable from './CompanyTable'
import getCompanies from './Actions'
//import uuid from 'uuid/v1';

class CompanyContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.loadData()
  }

  render() {
    return (
      <div>
        <h3 className="text-center">companies</h3>
        <CompanyTable  companies={this.props.companies} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // loading: state.loading,
    companies: state.Company.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(getCompanies())
    },
  }
}

CompanyContainer.propTypes = {
  companies: array,
  loadData: func,
}

CompanyContainer.defaultProps = {
  companies: [],
  loadData: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)