import React from 'react';
import './Slide.css'

function Slide() {
  return (
    <div className="container"> 
      <div className="row">
        <div className="col-lg-6">
          <div id="carouselExample" className="carousel slide" data-bs-interval="4000" style={{ width: '120%', maxWidth: '1000px', height: 'auto', marginLeft: 'calc(-200px + 100px)' }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="image-box">
                  <img src="assets/img/slider/1.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-box">
                  <img src="assets/img/slider/2.png" className="d-block w-100" alt="..." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-box">
                  <img src="assets/img/slider/3.png" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box" style={{ padding: '9px', backgroundColor: 'rgb(111, 168, 243)', overflow: 'hidden', maxWidth: '121%', width: '700px', marginLeft: 'auto', marginRight: 'auto', color: 'white', height: '463px' }}>
            <br /> <br />
            <h1>Central Adoption Resource Authority</h1><br />
            <ol>
              <h5><li>CARA is a statutory body of the Indian government responsible for monitoring and regulating in-country and inter-country adoptions.</li></h5><br />
              <h5><li>It serves as the central authority for inter-country adoptions under the Hague Convention on Inter-country Adoption, ratified by India in 2003.</li></h5><br />
              <h5><li>CARA oversees the adoption of orphaned, abandoned, and surrendered children through authorized agencies.</li></h5><br />
              <h5><li> In India, alongside CARA, there are Central Adoption Agencies (CAAs) that function under the authority's guidelines. </li></h5>
            </ol>
          </div>
        </div>
      
</div> <br />
<div class="container">
  
  <div class="row">
    <div class="col-lg-12">
      <div id="reservationMessage-2" class="alert alert-info" role="alert">
        Please note: CARINGS referral cycle for RI/NRI/OCI & Foreigner PAPs execute twice a week i.e Tuesday at 11.00 am & Thursday at 12.00 pm.
      </div>
    </div>
  </div>
</div> 


<br /><div className="container">
  <div style={{ textAlign:"center"}}><h1>Guildlines</h1></div> <br />
  <div style={{  borderTop: '2px solid black' }}> <hr /></div><br />
  <div className="row">
    <div className="col-lg-4">
      <div className="GGbox d-flex flex-column justify-content-center align-items-center r" style={{backgroundColor: '#FFD990',textAlign:"center"}}>
        <h2>PROCESS RELATED TO ADOPTABLE CHILDREN</h2><br /><br />
        <img src="assets/img/header/GD1.png" alt="Image 1" className="img-fluid" width={241} height={161} /><br /><br />
        <p>Adoption means a legal process that allows someone to become the parent of a child, even though the parent and child are not related by blood. But in every other way, adoptive parents are the child's parents
        </p>
      </div><br />
    </div>
    
    <div className="col-lg-4">
      
      <div className="GGbox d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: '#FAD1A8',textAlign:"center"}}>
        <h2>PROCEDURE FOR ADOPTION</h2><br /><br />
        <img src="assets/img/header/GD2.png" alt="Image 2" className="img-fluid" width={241} height={161} /><br /><br />
        <p>Every resident Indian Prospective Adoptive Parent (PAP), who intends to adopt a child, shall register online in Child Adoption Resource Information and Guidance System by filling up the application form as provided in Schedule-5 and uploading the relevant documents</p>
      </div> <br />
    </div>
    <div className="col-lg-4">
      <div className="GGbox d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: '#F2DE9D',textAlign:"center"}}>
        <h2>ROLE OF AGENCIES &amp; AUTHORITIES</h2><br /><br />
        <img src="assets/img/header/GD3.png" alt="Image 3" className="img-fluid" width={241} height={161} /><br /><br />
        <p>Various recognized agencies and authorities have been assigned roles to facilitate the adoption process as per Guidelines Governing Adoption of Children-2015</p>
      </div>
    </div> 
  </div>
</div>
<br />

<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="text-center">
        <img 
          src="assets/img/header/Mankibaat.png" 
          className="img-fluid" 
          alt="Mankibaat" 
          style={{ maxWidth: '2000px', width: '120%', height: 'auto', marginLeft: '-10%' }} 
        />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Slide;
