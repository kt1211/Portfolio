import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

function Remenu() {
  return (
    <div className="container-fluid">
      <div className="button-container row justify-content-center">
        <Link to="/Eli" className="col-lg-2 col-md-3 col-sm-6 col-10 mb-3">
          <button className="btn btn-custom">Eligibility</button>
        </Link>
        <Link to="/Guid" className="col-lg-2 col-md-3 col-sm-6 col-10 mb-3">
          <button className="btn btn-custom">Guidelines for Adoption</button>
        </Link>
        <Link to="/Doc" className="col-lg-2 col-md-3 col-sm-6 col-10 mb-3">
          <button className="btn btn-custom">Documents Required</button>
        </Link>
        <Link to="/Map" className="col-lg-2 col-md-3 col-sm-6 col-10 mb-3">
          <button className="btn btn-custom">Search Adoption Agency</button>
        </Link>
        <Link to="/Register" className="col-lg-2 col-md-3 col-sm-6 col-10 mb-3">
          <button className="btn btn-custom">Online Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Remenu;
