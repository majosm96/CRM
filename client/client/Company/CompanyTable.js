import React from 'react';
import { array, func } from 'prop-types';

import CompanyRow from './CompanyRow';


const CompanyTable = (props) => {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Address</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        {props.companies.map(item => (<CompanyRow
          key={item.id} 
          company={item}
          singleCompanyView={props.singleCompanyView} 
          deleteCompany={props.handleDelete} 
        />))}
      </tbody>
    </table>
  );
}

CompanyTable.propTypes = {
  companies: array,
  singleCompanyView: func,
  handleDelete: func,
};

CompanyTable.defaultProps = {
  companies: [],
  singleCompanyView: () => {},
  handleDelete: () => {},
};

export default CompanyTable;