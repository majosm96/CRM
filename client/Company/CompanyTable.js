import React from 'react';
import { array } from 'prop-types';
import Table from 'react-bootstrap/lib/Table';

import CompanyRow from './CompanyRow';

const CompanyTable = ({ companies }) => {
  console.log(companies);
  return (
    <Table responsive striped bordered condensed hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(item => <CompanyRow key={item.id} company={item} />)}
      </tbody>
    </Table>
  );
};

CompanyTable.propTypes = {
  companies: array,
};

CompanyTable.defaultProps = {
  companies: [],
};

export default CompanyTable;
