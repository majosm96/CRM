import React from 'react';
import { object, func } from 'prop-types';

// const DepartmentListItem = ({ department }) => <row>{department.value}</row>;

const ClientRow = (props) => {
  return (
    <tr className="table-row" onClick={props.singleClientView}>
      <td>{props.client.id}</td>
      <td>{props.client.name}</td>
      <td>{props.client.email}</td>
      <td>{props.client.phone}</td>
      <td>{props.client.position}</td>
      <td>{props.client.company}</td>
      <td>
        <img className="delete__action" src="./imgs/delete2.png" alt="delete client" />
      </td>
    </tr>
  );
}

ClientRow.propTypes = {
  client: object,
  singleClientView: func,
  handleDelete: func,
}

ClientRow.defaultProps = {
  client: object,
  singleClientView: () => {},
  handleDelete: () => {},
}

export default ClientRow ;