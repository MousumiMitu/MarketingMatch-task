import React from "react";
import "./Navbar.css";
import logo from "../../../images/icons8-twitter-100.png";
import logo1 from "../../../images/wanderon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <img src={logo1} alt="" className="nav-logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <div className="nav-link-item">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                +91-8887756502
              </div>
              <div className="d-flex ">
                <li class="nav-item">
                  <a class=" nav-link-item " aria-current="page" href="#">
                    Trending trips
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link-item" href="#">
                    Workcations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link-item" href="#">
                    Blogs
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
