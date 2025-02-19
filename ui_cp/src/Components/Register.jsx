import React from 'react';
import './Menu.css'; 
import Remenu from './Remenu';

function Register() {
  return (
    <div>
     
    <Remenu/><br />
      
    <div>
  <br /><br />
  <div className="marital-detail-1">
    Marital Details 
  </div>
  <br />
  <div className="marital-detail">
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="marriageStatus">Marriage Status:</label>
        <select className="form-select" id="marriageStatus">
          <option value="married">Select Status</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
      <div className="col">
        <label className="form-label" htmlFor="marriageDate">Date of Marriage:</label>
        <input type="date" className="form-control" id="marriageDate" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="applicationStatus">Application ID:</label>
        <input type="text" className="form-control" id="applicationStatus" />
      </div>
    </div>
  </div>
  <br />
  <div className="marital-detail-1">
    Personal Information : Male
  </div>
  <br />
  <div className="marital-detail">
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="dob">Date of Birth:</label>
        <input type="date" className="form-control" id="dob" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="nationality">Nationality:</label>
        <select className="form-select" id="nationality">
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="income">Income:</label>
        <input type="number" className="form-control" id="income" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="state">State:</label>
        <select className="form-select" id="state">
          <option value>Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
      </div>
      <div className="col">
        <label className="form-label" htmlFor="district">District:</label>
        <select className="form-select" id="district">
          <option value>Select District</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
        </select>
      </div>
    </div>
    <br />
    <div>
      <label className="form-label" htmlFor="idType">ID Type:</label>
      <select className="form-select" id="idType">
        <option value="passport">Passport</option>
        <option value="driverLicense">Driver's License</option>
        <option value="nationalID">National ID</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="idNumber">ID Number:</label>
        <input type="text" className="form-control" id="idNumber" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="idUpload">ID Upload:</label>
        <input type="file" className="form-control" id="idUpload" />
      </div>
    </div>
  </div>
  <br />
  <div className="marital-detail-1">
    Personal Information : Female
  </div>
  <br />
  <div className="marital-detail">
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="dob">Date of Birth:</label>
        <input type="date" className="form-control" id="dob" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="nationality">Nationality:</label>
        <select className="form-select" id="nationality">
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="income">Income:</label>
        <input type="number" className="form-control" id="income" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="state">State:</label>
        <select className="form-select" id="state">
          <option value>Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
      </div>
      <div className="col">
        <label className="form-label" htmlFor="district">District:</label>
        <select className="form-select" id="district">
          <option value>Select District</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
        </select>
      </div>
    </div>
    <br />
    <div>
      <label className="form-label" htmlFor="idType">ID Type:</label>
      <select className="form-select" id="idType">
        <option value="passport">Passport</option>
        <option value="driverLicense">Driver's License</option>
        <option value="nationalID">National ID</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="row">
      <div className="col">
        <label className="form-label" htmlFor="idNumber">ID Number:</label>
        <input type="text" className="form-control" id="idNumber" />
      </div>
      <div className="col">
        <label className="form-label" htmlFor="idUpload">ID Upload:</label>
        <input type="file" className="form-control" id="idUpload" />
      </div>
    </div>
  </div>
  <br />
  <div className="marital-detail-1">
    Children Information 
  </div>
  <br />
  <div className="marital-detail">
    <div className="row">
      <div className="col">
        <label htmlFor="biologicalChildren">No. of Biological Children:</label>
        <input type="number" className="form-control" id="biologicalChildren" />
      </div>
      <div className="col">
        <label htmlFor="adoptionChildren">No. of Adoption Children:</label>
        <input type="number" className="form-control" id="adoptionChildren" />
      </div>
    </div>
  </div>
  <br />
  <div className="marital-detail-1">
    Child Preference for Adoption
  </div>
  <br />
  <div className="marital-detail">
    <div className="row">
      <div className="col">
        <label htmlFor="childAge">Age:</label>
        <input type="text" className="form-control" id="childAge" />
      </div>
      <div className="col">
        <label htmlFor="childHealth">Health Status:</label>
        <input type="text" className="form-control" id="childHealth" />
      </div>
      <div className="col">
        <label htmlFor="childGender">Gender:</label>
        <select className="form-select" id="childGender">
          <option value="girl">Girl</option>
          <option value="boy">Boy</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label htmlFor="childHealth">Motivation</label>
        <input type="text" className="form-control" id="childHealth" />
      </div>
      <div className="col">
      <label className="form-label" htmlFor="state">State:</label>
        <select className="form-select" id="state">
          <option value>Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
      </div>
      <div className="col">
      <label className="form-label" htmlFor="district">District:</label>
        <select className="form-select" id="district">
          <option value>Select District</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
        </select>
      </div>
    </div>
  </div>
</div>

      
      <br />
  <div className="d-grid gap-2">
  <button className="m111"  type="button">Submit</button>
  
</div>

      
      
      <br />
      
    </div>
  );
}

export default Register;
