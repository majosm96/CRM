import React from 'react';
import { array, func } from 'prop-types';

import ClientRow from './ClientRow';


const ClientTable = (props) => {
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Position</td>
          <td>Company</td>
        </tr>
      </thead>
      <tbody>
        {props.clients.map(item => (<ClientRow
          key={item.id} 
          client={item}
          singleClientView={props.singleClientView} 
          deleteClient={props.handleDelete} 
        />))}
      </tbody>
    </table>
  );
}

ClientTable.propTypes = {
  clients: array,
  singleClientView: func,
  handleDelete: func,
};

ClientTable.defaultProps = {
  clients: [],
  singleClientView: () => {},
  handleDelete: () => {},
};

export default ClientTable;