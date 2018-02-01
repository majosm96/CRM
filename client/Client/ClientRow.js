import React from 'react';
import { object } from 'prop-types';

const ClientRow = props => (
  <tr>
    <td>{props.client.name}</td>
    <td>{props.client.email}</td>
    <td>{props.client.phone}</td>
    <td>{props.client.position}</td>
    <td>{props.client.company}</td>
  </tr>
);

ClientRow.propTypes = {
  client: object,
};

ClientRow.defaultProps = {
  client: object,
};

export default ClientRow;
