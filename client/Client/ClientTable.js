import React from 'react';
import { array } from 'prop-types';
import Table from 'react-bootstrap/lib/Table';

import ClientRow from './ClientRow';

const ClientTable = props => (
  <Table responsive striped bordered condensed hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Position</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      {props.clients.map(client => <ClientRow key={client.id} client={client} />)}
    </tbody>
  </Table>
);

ClientTable.propTypes = {
  clients: array,
};

ClientTable.defaultProps = {
  clients: [],
};

export default ClientTable;
