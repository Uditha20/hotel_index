import React, { useState } from "react";

function Navbar() {
  const [click,setClick]=useState(true);
  function handleClick(){
   
    setClick(!click);
    console.log(click)
  }
  return (
    <div className="container">
      <nav class="navbar  navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand " href="#">
            Designspace
          </a>
          <button
          onClick={handleClick}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse abc" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Booking
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Facilities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Room
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-btn">
              <button className="btn" style={{ marginRight: "25px" }}>
                Login{" "}
              </button>
              <button className="btn nav-btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  
}

export default Navbar;
