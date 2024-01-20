import React from "react";

function Footer() {
  return (
    <div className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h6 style={{fontWeight:"bold"}}>Designspace</h6>
            <p>
              Sometimes features require a short description. This <br />
              can be detailed description or just a short text.
            </p>
          </div>
          <div className="col-lg-6 col-12 mb-5">
            <div className="row">
              <div className="col-lg-4 col-6">
                <h6 className="footer-header">Company</h6>
                <p><a href="" className="footer-link">About Us</a></p>
                <p><a href="" className="footer-link">Testimonial</a></p>
                <p><a href="" className="footer-link">Terms of services</a></p>
                <p><a href="" className="footer-link">Privacy Policy</a></p>
                <p><a href="" className="footer-link">Investor</a></p>
              </div>
              <div className="col-lg-4 col-6">
                <h6 className="footer-header">Services</h6>
                <p><a href="" className="footer-link">Booking</a></p>
                <p><a href="" className="footer-link">Support Center</a></p>
                <p><a href="" className="footer-link">Blog</a></p>
                <p><a href="" className="footer-link">Review</a></p>
                <p><a href="" className="footer-link">Room</a></p>


              </div>
              <div className="col-lg-4 col-6">
                <h6 className="footer-header">Resources</h6>
                <p><a href="" className="footer-link">Help Center</a></p>
                <p><a href="" className="footer-link">Guid</a></p>
                <p><a href="" className="footer-link">Partner Network</a></p>
                <p><a href="" className="footer-link">FAQ's</a></p>
                <p><a href="" className="footer-link ">Documentation</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
