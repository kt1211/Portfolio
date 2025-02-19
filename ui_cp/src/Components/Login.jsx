import React from 'react';


function Login() {
  return (
    <div>
   
 
    <div className="container-fluid">
  <div className="row justify-content-center align-items-center" >
  <div className="col-lg-6 col-md-12" style={{ color: 'white', width: '750px' }}>
      <div className="card" style={{ backgroundColor: '#E5E5E5' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ backgroundColor: '#3F5988', color: 'white', height: "70px", textAlign: 'center' }}>RESIDENT INDIAN PARENTS LOGIN</h2><br />
          <form>
            <div className="form-group">
              <label htmlFor="username">User ID</label>
              <input type="text" className="form-control" id="username" placeholder="User ID" />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Passwod</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
              <br />
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: '#83baf5' }}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<br />

</div>

  );
}

export default Login;
