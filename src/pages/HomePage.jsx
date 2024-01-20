import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/image/Rectangle.png";
import careimg from "../assets/image/care.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { bestOffer, popular } from "../data/data";
import { CiStar,CiSearch} from "react-icons/ci";

import icon from "../assets/image/Icon.svg";
import Footer from "../components/Footer";
import feedone from "../assets/image/feed1.png";
import gps from "../assets/image/gps.png";


export default function HomePage() {
  // owcarousel options
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
      },
    },
  };
  return (
    <div style={{ background: "#fffff" }}>
      <Navbar />
      {/* hero section */}
      <div className="container-fluid  hero position-relative">
        <div className="outer-hero ">
          <div className="row">
            <div className="col-lg-6 col-12 col-md-6 inner-hero">
              <img src={heroImg} className="img-fluid hero-img" />
            </div>
            <div className="col-lg-6 col-12 col-md-6 inner-hero position-relative">
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
          className="row position-absolute  filter-bar d-flex  justify-content-center"
          style={{ bottom: "15%", left: "20%" }}
        >
          <div className="col-lg-2 col-12  ">
            <div className="col-lg-12 d-flex filter-bar-item align-items-center justify-content-center mx-2 mt-4">
              <img src={gps} className="" />
             <h5 className="mx-1">Location</h5> 
            </div>
            <div className="col-lg-12 mx-2 mt-1">
              <select class="form-select " aria-label="Default select example">
                <option selected className="">
                  Bali,Indonesia
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              
            </div>
          </div>
          <div className="col-lg-2 col-12 ">
            <div className="col-lg-12  d-flex align-items-center justify-content-center mx-2 mt-4 filter-bar-item">
              <img src={gps} className="" />
             <h5 className="mx-1">Check In</h5> 
            </div>
            <div className="col-lg-12 mx-2 mt-1">
              <input type="date" class="form-select " aria-label="Default select example"/>
            </div>
          </div>
          <div className="col-lg-2 col-12 ">
            <div className="col-lg-12  d-flex align-items-center justify-content-center mx-2 mt-4">
              <img src={gps} className="" />
             <h5 className="mx-1">Check Out</h5> 
            </div>
            <div className="col-lg-12 mx-2 mt-1">
            <input type="date" class="form-select " aria-label="Default select example"/>
            </div>
          </div>
          <div className="col-lg-2 col-12 ">
            <div className="col-lg-12 d-flex align-items-center justify-content-center mx-2 mt-4">
              <img src={gps} className="" />
             <h5 className="mx-1">Room</h5> 
            </div>
            <div className="col-lg-12 mx-2 mt-1">
              <select class="form-select " aria-label="Default select example">
                <option selected className="">
                  1Room, 3Guest
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
            <div className="col-lg-2 col-12" style={{height:"100"}}>
            <div className="col-lg-12  d-flex align-items-center justify-content-center mx-5 mt-2">
             <button className="btn filter-bar-btn"><CiSearch size={"24px"}/>Search</button>
            </div>
          </div>    
        </div>
      </div>
      {/* best offer */}
      <div className="container-fluid mt-5" style={{ background: "#ffffff" }}>
        <div className="container   best-outer">
          <div className="row">
            <h1 className="mt-5">Best offer this month</h1>
            <div className=" d-flex justify-content-between">
              <p>This can be detailed description or just a short text</p>
              <button
                className="btn best-offer-btn col-12"
                style={{ fontWeight: "bold" }}
              >
                View All
              </button>
            </div>
            <OwlCarousel className="owl-theme mt-4" loop {...options}>
              {bestOffer.map((dataItems, key) => {
                return (
                  <div className="item ">
                    <div className="offer-card d-flex align-items-center">
                      <div className="offer-card-inner">
                        <div className="d-flex m-4">
                          <div className="">
                            <img
                              src={dataItems.src}
                              className="img-fluid offer-img "
                              alt=""
                            />
                          </div>
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ flexDirection: "column", width: "50%" }}
                          >
                            <h1>{dataItems.discout}% Off</h1>
                            <p className="" style={{ textAlign: "center" }}>
                              This can be detailed description or <br /> just a
                              short text
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* popular section*/}
      <div
        className="container-fluid "
        style={{ background: "#F4F9F8", minHeight: "1150px" }}
      >
        <div className="container   best-outer">
          <div className="row">
            <h1 className="mt-5">Best offer this month</h1>
            <div className=" d-flex justify-content-between">
              <p>This can be detailed description or just a short text</p>
              <button
                className="btn best-offer-btn col-12"
                style={{ fontWeight: "bold" }}
              >
                View All
              </button>
            </div>

            {popular.map((popularData, key) => {
              return (
                <div className="col-lg-4 col-12">
                  <div class="card m-auto popular-card mt-5">
                    <img
                      src={popularData.src}
                      class="card-img-top "
                      alt="..."
                      key={popularData.id}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{popularData.place}</h5>
                      <p class="card-text d-flex justify-content-between">
                        {popularData.location}
                        <span>
                          {" "}
                          <CiStar
                            className="mb-1 mx-1"
                            style={{ background: "yellow" }}
                          />
                          {popularData.rating}
                        </span>
                      </p>
                      <div className="d-flex">
                        <h4 className="card-title">{popularData.price}</h4>
                        <p>/{popularData.mode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* care section */}
      <div className="container-fluid mt-5" style={{}}>
        <div className="container " style={{ background: "#ffffff" }}>
          <div className="row ">
            <div className="col-lg-6 col-12">
              <div className="care-inner">
                <h1 style={{ fontSize: "48px" }}>
                  We care for each guest like a family
                </h1>
                <p style={{ fontSize: "20px" }}>
                  Create useful prototype with our universal
                  <br />
                  wireframes and block without any diffulties,
                  <br />
                  just copy and paste wherever you want
                </p>
                <div className="care-icons d-flex align-items-start">
                  <img src={icon} />
                  <div>
                    <h5 className="mx-2">Best quality Hotel</h5>
                    <p className="mx-2">
                      Sometimes features require a short description. This can
                      be detailed description or just a short text.
                    </p>
                  </div>
                </div>
                <div className="care-icons d-flex align-items-start">
                  <img src={icon} />
                  <div>
                    <h5 className="mx-2">Best quality Hotel</h5>
                    <p className="mx-2">
                      Sometimes features require a short description. This can
                      be detailed description or just a short text.
                    </p>
                  </div>
                </div>
                <div className="care-icons d-flex align-items-start">
                  <img src={icon} />
                  <div>
                    <h5 className="mx-2">Best quality Hotel</h5>
                    <p className="mx-2">
                      Sometimes features require a short description. This can
                      be detailed description or just a short text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="care-inner-right  d-flex justify-content-center align-items-center">
                <img
                  src={careimg}
                  style={{ height: "516px", width: "495px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feed back */}
      <div
        className="container-fluid mt-5"
        style={{ background: "#B3BAC5", height: "680px" }}
      >
        <div className="container   best-outer">
          <div className="row">
            <h1 className="mt-5">Best offer this month</h1>
            <div className=" d-flex justify-content-between">
              <p>This can be detailed description or just a short text</p>
              <button
                className="btn best-offer-btn col-12"
                style={{ fontWeight: "bold" }}
              >
                View All
              </button>
            </div>
            <OwlCarousel className="owl-theme mt-4" loop dotsEach {...options}>
              <div class="item">
                <div className="feedback-outer  p-4">
                  <div className="rating mb-3">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <div>
                    <p>
                      Designspace is a really great site with really great{" "}
                      <br /> people and the quality of content is excellent.
                      Some of <br />
                      the best designers in the world use this, and it is <br />{" "}
                      inspirational.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="feed-img">
                      <img src={feedone} alt="feed" className="" />
                    </div>
                    <div className="mt-3 mx-2">
                      <h5 className="happy ">Angela Karamoy</h5>
                      <p className="">Happy customer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="feedback-outer  p-4">
                  <div className="rating mb-3">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <div>
                    <p>
                      Designspace is a really great site with really great{" "}
                      <br /> people and the quality of content is excellent.
                      Some of <br />
                      the best designers in the world use this, and it is <br />{" "}
                      inspirational.
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="feed-img">
                      <img src={feedone} alt="feed" className="" />
                    </div>
                    <div className="mt-3 mx-2">
                      <h5 className="happy ">Angela Karamoy</h5>
                      <p className="">Happy customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 d-flex align-items-center"
        style={{ height: "228px" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-12">
              <h1>
                Subscribe us for <br /> more info & discount
              </h1>
            </div>
            <div className="col-lg-6 col-12 ">
              <form class="d-flex position-relative mt-3">
                <input
                  class="form-control me-2 search-input"
                  type="search"
                  placeholder="Enter Your email address"
                  aria-label="Search"
                />
                <button class="btn search-btn" type="submit">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
