import React from 'react';
import { object } from 'prop-types';

// const DepartmentListItem = ({ department }) => <row>{department.value}</row>;

const CompanyRow = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.company.id}</td>
        <td>{props.company.name}</td>
        <td>{props.company.address}</td>
        <td>{props.company.phone}</td>
      </tr>
    </tbody>
  );
}

CompanyRow.propTypes = {
  company: object,
}

CompanyRow.defaultProps = {
  company: object,
}

export default CompanyRow ;