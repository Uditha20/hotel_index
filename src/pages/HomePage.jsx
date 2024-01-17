import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/image/Rectangle.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function HomePage() {
  const options = {
    margin: 10,

    responsive: {
        0: {
            items: 1,
        },
    
        600: {
            items: 1,
        },
     
        1000: {
            items: 2,

        }
    },
};
  return (
    <div className="" style={{ background: "#fffff" }}>
      <Navbar />
      {/* hero section */}
      <div className="container-fluid   position-relative">
        <div className="outer-hero ">
          <div className="row">
            <div className="col-lg-6 col-12  inner-hero">
              <img src={heroImg} className="img-fluid hero-img" />
            </div>
            <div className="col-lg-6 col-12 inner-hero position-relative">
              <div className="row">
                <div
                  className="col-6 position-absolute"
                  style={{ top: "10%", left: "20%" }}
                >
                  <h1 className="hero-text">
                    Experience something new every moment
                  </h1>
                  <p>
                    Escape to place where you can relax and <br />
                    unwind, rejuvenate, and reconnect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border border-primary m-auto position-absolute"
          style={{ bottom: "10%", left: "20%" }}
        >
          <div className="col-lg-3 col-12">u</div>
          <div className="col-lg-3 col-12">d</div>
          <div className="col-lg-3 col-12">i</div>
          <div className="col-lg-3 col-12">t</div>
        </div>
      </div>

      {/* best offer */}
      <div className="container-fluid mt-5" style={{ background: "#ffffff" }}>
        <div className="container   best-outer">
          <div className="row">
            <h1 className="mt-5">Best offer this month</h1>
            <div className=" d-flex justify-content-between">
              <p>This can be detailed description or just a short text</p>
              <button className="btn best-offer-btn col-12">View All</button>
            </div>
            <OwlCarousel className="owl-theme border border-primary mt-4" loop {...options}>
              <div className="row">
                <div className="item">
                  <div className="row border border-warning offer-card d-flex align-items-center" >
                    <div className="col">1</div>
                    <div className="col">2</div>
                  </div>

                  {/* <div class="card" style={{height:"262px"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div> */}
                
                </div>
              </div>
            </OwlCarousel>
            
          </div>
        </div>
      </div>
    </div>
  );
}
