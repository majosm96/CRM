import React from 'react';
import CompanyTable from './CompanyTable';

import uuidv1 from 'uuid/v1';

class CompanyContainer extends React.Component {
  // State
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };

    console.log(this.state.companies)

    this.render = this.render.bind(this);
  }

  // Did Mount
  componentDidMount(){
    const url = 'http://localhost:3000/companies';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {    
         this.setState({companies: data});
      })
  }

  // Render App
  render() {
    return (
      <div>
        <h1>COMPANIES</h1>
        <div>
          <CompanyTable companies={this.state.companies}/>
        </div>
      </div>
    );
  }
}

export default CompanyContainer;
