import React from 'react';
import { array } from 'prop-types';

import ClientRow from './ClientRow';


const ClientTable = (props) => {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Position</td>
          <td>Company</td>
        </tr>
      </thead>
      {props.clients.map(item => <ClientRow key={item.id} client={item} />)}
    </table>
  );
}

ClientTable.propTypes = {
  clients: array,
};

ClientTable.defaultProps = {
  clients: []
};

export default ClientTable;