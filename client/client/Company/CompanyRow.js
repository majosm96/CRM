import React from 'react';
import { object, func } from 'prop-types';

// const DepartmentListItem = ({ department }) => <row>{department.value}</row>;

const CompanyRow = (props) => {
  return (
    <tr className="table-row" onClick={props.singleCompanyView}>
      <td>{props.company.id}</td>
      <td>{props.company.name}</td>
      <td>{props.company.address}</td>
      <td>{props.company.phone}</td>
      <td>
        <img className="delete__action" src="./imgs/delete2.png" alt="delete client" />
      </td>
    </tr>
  );
}

CompanyRow.propTypes = {
  company: object,
  singleCompanyView: func,
  handleDelete: func,
}

CompanyRow.defaultProps = {
  company: object,
  singleCompanyView: () => {},
  handleDelete: () => {},
}

export default CompanyRow ;