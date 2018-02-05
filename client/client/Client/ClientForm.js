import React from 'react';

const ClientForm = () => (
  <div>
    <h3>New client</h3>
    <form className="form-basic">
      <div className="form-item">
        <label htmlFor="newClientName">Name</label>
        <input type="text" id="clientName" name="newClientName" placeholder="Full name" />
      </div>
      <div className="form-item">
        <label htmlFor="clientEmail">Email</label>
        <input type="text" id="clientEmail" name="clientEmail" placeholder="email" />
      </div>
      <div className="form-item">
        <label htmlFor="clientPhone">Phone</label>
        <input type="text" id="clientPhone" name="clientPhone" placeholder="Phone number" />
      </div>
      <div className="form-item">
        <label htmlFor="clientPosition">Position</label>
        <input type="text" id="clientPosition" name="clientPosition" placeholder="Full name" />
      </div>
      <div className="form-item">
        <label htmlFor="clientCompany">Company</label>
        <input type="text" id="clientCompany" name="clientCompany" placeholder="Full name" />
      </div>
      <div className="form-item">
        <button className="btn-primary"> Add
        </button>
      </div>
    </form>
  </div>
);



export default ClientForm;
