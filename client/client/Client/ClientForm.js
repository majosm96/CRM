import React from 'react';
import { func, object } from 'prop-types';

const ClientForm = (props) => (
  <div className="form-container">
    <h4>New client</h4>
    <div className="form-basic">
      <div className="form-item">
        <label htmlFor="newClientName">Name
          <input type="text" name="newClientName" value={props.item.name} onChange={props.handleInputChange} id="newClientName" required="true" placeholder="Full name" />
        </label>
        
      </div>
      <div className="form-item">
        <label htmlFor="newClientEmail">Email
          <input type="text" name="newClientEmail" value={props.item.email} onChange={props.handleInputChange} id="newClientEmail" required="true" placeholder="email" />
        </label>
        
      </div>
      <div className="form-item">
        <label htmlFor="newClientPhone">Phone
          <input type="text" name="newClientPhone"  value={props.item.phone} onChange={props.handleInputChange} id="newClientPhone" required="true" placeholder="Phone number" />
        </label>
        
      </div>
      <div className="form-item">
        <label htmlFor="newClientPosition">Position
          <input type="text" name="newClientPosition" value={props.item.position} onChange={props.handleInputChange} id="newClientPosition" required="true" placeholder="Full name" />
        </label>
        
      </div>
      <div className="form-item">
        <label htmlFor="newClientCompany">Company
          <input type="text" name="newClientCompany" value={props.item.company} onChange={props.handleInputChange} id="newClientCompany" required="true" placeholder="Full name" />
        </label>
        
      </div>
      <div className="form-item">
        <button type="submit" className="btn-primary" onClick={props.handleSubmit}>Add</button>
      </div>
    </div>    
  </div>
);



ClientForm.propTypes = {
  item: object,
  handleSubmit: func,
  handleInputChange: func,
};

ClientForm.defaultProps = {
  item: {},
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default ClientForm;
