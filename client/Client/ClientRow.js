import React from 'react';
import { object } from 'prop-types';

const ClientRow = ({ client }) => (
  <tr>
    <td>{client.name}</td>
    <td>{client.email}</td>
    <td>{client.phone}</td>
    <td>{client.position}</td>
    <td>{client.company}</td>
  </tr>
);

ClientRow.propTypes = {
  client: object,
};

ClientRow.defaultProps = {
  client: object,
};

export default ClientRow;
