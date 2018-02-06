import React from 'react';
import { func, object } from 'prop-types';

const CompanyForm = (props) => (
  <div className="form-container">
    <h4>New company</h4>
    <div className="form-basic">
      <div className="form-item">
        <label htmlFor="newCompanyName">Name
          <input type="text" name="newCompanyName" value={props.item.name} onChange={props.handleInputChange} id="newCompanyName" required="true" placeholder="Full name" />
        </label>       
      </div>
      <div className="form-item">
        <label htmlFor="newCompanyAddress">Address
          <input type="text" name="newCompanyAddress" value={props.item.address} onChange={props.handleInputChange} id="newCompanyAddress" required="true" placeholder="Full name" />
        </label>       
      </div>
      <div className="form-item">
        <label htmlFor="newCompanyPhone">Phone
          <input type="text" name="newCompanyPhone" value={props.item.phone} onChange={props.handleInputChange} id="newCompanyPhone" required="true" placeholder="Full name" />
        </label>       
      </div>
      <div className="form-item">
        <button type="submit" className="btn-primary" onClick={props.handleSubmit}>Add</button>
      </div>
    </div>    
  </div>
);



CompanyForm.propTypes = {
  item: object,
  handleSubmit: func,
  handleInputChange: func,
};

CompanyForm.defaultProps = {
  item: {},
  handleSubmit: () => {},
  handleInputChange: () => {},
};


export default CompanyForm;

