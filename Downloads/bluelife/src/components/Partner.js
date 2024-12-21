import React from 'react';
import './Partner.css';
// import handshake from '../'; // Adjust path if needed

const Partner = () => {
  return (
    <div className="partner-wrapper">
      {/* Intro Content */}
      <div className="intro-content">
        <h2>Partner with bluLife now</h2>
        <p>
          Blulife's partnership with Oshoppe offers customers a seamless in-store and digital
          experience, allowing them to explore products, purchase online, receive same-day
          delivery and installation, and enjoy benefits and rewards through both physical and
          digital platforms.
        </p>
      </div>

      {/* Main Content: Image + Form */}
      <div className="partner-container">
        {/* Left Section: Image */}
        <div className="partner-image">
          <img src={"/handshake.png"} alt="Partnership"  />
        </div>

        {/* Right Section: Form */}
        <div className="partner-form-section">
          <h3>Join Now with BluLife</h3>
          <form className="partner-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="" />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" placeholder="" />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="" />
            </div>

            <div className="submit-text">Submit</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partner;
