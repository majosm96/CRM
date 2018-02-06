import React, {Component} from 'react'
import { connect } from 'react-redux'
import { func, array } from 'prop-types';

import CompanyTable from './CompanyTable'
import CompanyForm from './CompanyForm'
import { getCompanies, addCompany, deleteCompany } from './Actions'

class CompanyContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCompanyName: '',
      newCompanyAddress:  '',
      newCompanyPhone: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.singleCompanyView = this.singleCompanyView.bind(this);
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
    let company = {}
    company.name = this.state.newCompanyName;
    company.address = this.state.newCompanyAddress;
    company.phone = this.state.newCompanyPhone;

    this.props.addCompany(company);

    this.setState = {
      newCompanyName: '',
      newCompanyAddress:  '',
      newCompanyPhone: '',
    };
  }

  showForm() {
    console.log('CTS is working')
  }

  singleCompanyView() {
    console.log('its a single company view function')
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCompany(e.getAttribute('id'));
    console.log(e.getAttribute('id'))  
  }


  render() {
    return (
      <div className="">
        <div className="section-wrap">
          <CompanyForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
          <h3 className="component__title">Companies</h3>
          <CompanyTable  
            companies={this.props.companies} 
            singleCompanyView={this.singleCompanyView} 
            deleteCompany={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    companies: state.Company.companies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCompany: contact => dispatch(addCompany(contact)),
    loadData: () => {
      dispatch(getCompanies())
    },
    deleteCompany: id => dispatch(deleteCompany(id)),
  }
}

CompanyContainer.propTypes = {
  companies: array,
  loadData: func,
  addCompany: func,
  deleteCompany: func,
}

CompanyContainer.defaultProps = {
  companies: [],
  loadData: () => {},
  addCompany: () => {},
  deleteCompany: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)