import React from 'react';
import { array } from 'prop-types';

import CompanyRow from './CompanyRow';


const CompanyTable = (props) => {
  
  return (
    <table className="table table-hover">
      {props.companies.map(item => <CompanyRow key={item.id} company={item} />)}
    </table>
  );
}

CompanyTable.propTypes = {
  companies: array,
};

CompanyTable.defaultProps = {
  companies: []
};

export default CompanyTable;