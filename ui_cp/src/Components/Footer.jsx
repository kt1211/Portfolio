import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: '#3F5988' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center"> {/* Center align items and content */}
          {/* Left Image */}
          <div className="col-md-auto">
            <img src="assets/img/footer/footer left.png" alt="left_image" />
          </div>

          {/* Content */}
          <div className="col-md text-center"> {/* Center align text */}
            <h1 className="mb-4">Central Adoption Resource Authority Ministry of Women & Child Development</h1>
            <p>Contact Us: Cara Head Office West Block 8, Wing 2, 1st Floor, R.K. Puram, New Delhi-110066 (India)</p>
            <p>Telephone Numbers: +91-11-26760474</p>
            <p>Website Content Managed by Central Adoption Resource Authority, GOI<br />
               Designed, Developed and Hosted by National Informatics Centre (NIC)</p>
            <h5 className="mt-4">Last Update: 24/01/2024<span id="currentTime"></span></h5>
          </div>

          {/* Right Image (Logo) */}
          <div className="col-md-auto">
            <img src="assets/img/footer/Footer R.png" alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
