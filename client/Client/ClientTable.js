import React from 'react';
import { array } from 'prop-types';
import Table from 'react-bootstrap/lib/Table';

import ClientRow from './ClientRow';

const ClientTable = ({ clients }) => {
  console.log(clients);
  return (
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
        {clients.map(item => <ClientRow key={item.id} client={item} />)}
      </tbody>
    </Table>
  );
};

ClientTable.propTypes = {
  clients: array,
};

ClientTable.defaultProps = {
  clients: [],
};

export default ClientTable;
