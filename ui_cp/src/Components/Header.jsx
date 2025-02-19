import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';


function Header() {
  return (
   <div>
   <hr />
  <nav class="navbar ">
  <div class="container-fluid">
    
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="assets/img/header/logo.png" alt="Logo" width="86" height="112" class="d-inline-block align-text-top me-2" />
      <span> <h4>Central Adoption Resource Authority</h4><h6>Ministry of Women & Child Development
</h6> <h6>Government of India</h6></span>
    </a>

   
    <div class="d-flex align-items-center ">
      <img src="assets/img/header/G20.png" alt="Right Logo 1" width="120" height="100" class="d-inline-block align-text-top ms-2 " />
    
    </div>

    
    <form class="d-flex align-items-center" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success me-2" type="submit">Search</button>
      <Link to="/Eli"><button class="btn btn-light rounded me-2 ms-2" type="submit">Register</button></Link>
      <Link to="/login"><button class="btn btn-light rounded me-2 ms-2" type="submit">Login</button></Link>
    </form>
    <div>      <img src="assets/img/header/saty.png" alt="Login Logo" width="77" height="113" class="d-flex align-items-center" />
</div>
  </div>
</nav>


      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
  <a class="nav-link d-flex align-items-center" href="#">
    <i class="bi bi-envelope-fill me-2"></i> 
    <img src="assets/img/header/gmail.png" alt="Login Logo" width="25" height="25" class="me-2" /> 
    Email: caradesh.wcd@nic.in
  </a>
</li>

<li class="nav-item">
  <a class="nav-link d-flex align-items-center" href="#">
    <i class="bi bi-envelope-fill me-2"></i> 
    <img src="assets/img/header/tollfree.png" alt="Login Logo" width="25" height="25" class="me-2" />  
    1800-11-1311
  </a>
</li>  
        
      </ul>
      <Menu/>
     
      
      
<br />

      <div className=" border-bottom mb-3" >
     <hr /> <p class="text-center">Child Adoption Resource Information and Guidance System (CARINGS) 3.2</p><hr />
      </div> <br />
      
      <br />
   </div>
 
  )
}

export default Header
