import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'; 



function Menu() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-custom"  >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <a className="nav-link me-4" aria-current="page" href="#" style={{ backgroundColor: '#3498DB', borderRadius: '5px', color: 'white', width: '160px', alignItems: 'center' }}>
  <Link to="/" className="home"> <img src="assets/img/header/home.png" alt="Home" style={{ width: '20px', height: '20px' }} />
    Home </Link>
  </a>
</li>

            <li className="nav-item dropdown me-4  ">
              <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White',width: '160px' }}>
                Parents
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Indian Parents</a></li>
                <li><a className="dropdown-item" href="#">Foreigner Living in India</a></li>
                <li><a className="dropdown-item" href="#">Foreigner Living Abroad</a></li>
                <li><a className="dropdown-item" href="#">Relative Adoption</a></li>
                <li><a className="dropdown-item" href="#">Adoption by Step Parents</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4 ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White' ,width: '165px'}}>
                Roles and Character
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Specialized Adoption Agency</a></li>
                <li><a className="dropdown-item" href="#">State Adoption Resources</a></li>
                <li><a className="dropdown-item" href="#">List of District Child</a></li>
                <li><a className="dropdown-item" href="#">Foreign Agencies</a></li>
                <li><a className="dropdown-item" href="#">District Magistrate</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4 ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White',width: '160px' }}>
                Stakeholders
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink3">
                <li><a className="dropdown-item" href="#">Specialized Adoption Agency</a></li>
                <li><a className="dropdown-item" href="#">Foreign Adoption Agency</a></li>
                <li><a className="dropdown-item" href="#">District Child Protection Unit</a></li>
                <li><a className="dropdown-item" href="#">Regional Passport Office</a></li>
                <li><a className="dropdown-item" href="#">Birth Certification Issuing Authority</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown me-4  ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White' ,width: '160px'}}>
                Act and Regulation
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink4">
                <li><a className="dropdown-item" href="#">JJ Act 2015</a></li>
                <li><a className="dropdown-item" href="#">JJ Amendment Act, 2015</a></li>
                <li><a className="dropdown-item" href="#">Juveniles Justices Model Rules, 2016</a></li>
                <li><a className="dropdown-item" href="#">JJ Model Amendment Rules, 2022</a></li>
                <li><a className="dropdown-item" href="#">Adoption Regulation 2020</a></li>
              </ul>
            </li>
            <li className="nav-item me-4 ">
              <a className="nav-link" href="#" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White',width: '160px' }}>CPGRAMS</a>
            </li>
            <li className="nav-item me-4  ">
              <a className="nav-link" href="#" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White' ,width: '160px' }}>Resources</a>
            </li>
            <li className="nav-item dropdown me-4 ">
              <a className="nav-link dropdown-toggle dropbtn" href="#" id="navbarDropdownMenuLink5" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#3498DB',borderRadius: '5px', color: 'White' ,width: '160px'}}>
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink5">
                <a className="dropdown-item" href="#">Meets the Minister</a>
                <a className="dropdown-item" href="#">Streeing Committee</a>
                <a className="dropdown-item" href="#">Advisory Committee</a>
                <a className="dropdown-item" href="#">About CARA</a>
                <a className="dropdown-item" href="#">Dos & Don</a>
              </div> 
              </li>
          </ul>
        </div>
      </div> <br />
      <hr />
    </nav>
    </div>
  )
}

export default Menu
