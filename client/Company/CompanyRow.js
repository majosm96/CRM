import React from 'react';
import { object } from 'prop-types';

const CompanyRow = ({ company }) =>
  <tr><td>{company.name}</td><td>{company.address}</td><td>{company.phone}</td></tr>;

CompanyRow.propTypes = {
  company: object,
};

CompanyRow.defaultProps = {
  company: object,
};

export default CompanyRow;
