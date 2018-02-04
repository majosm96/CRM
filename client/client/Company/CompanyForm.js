import React from 'react';
// import { array } from 'prop-types';
// import { Form, FormGroup, Label, Input } from 'react-bootstrap/lib/Form';
// import { Form, Button } from 'semantic-ui-react';

const ClientForm = () => (
  <div>
    <h3>New client</h3>
    <div>
      <label for="clientName">from:</label>
      <input type="text" id="name" name="clientName">
    </div>
  </div>
);

// ClientTable.propTypes = {
//   clients: array,
// };

// ClientTable.defaultProps = {
//   clients: [],
// };

export default ClientForm;
