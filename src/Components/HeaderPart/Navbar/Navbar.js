import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../../../images/wanderon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeNavColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <div>
      <nav
        className={
          navBar
            ? "navbar navbar-expand-lg navbar-light navbar-position active-color"
            : "navbar navbar-expand-lg navbar-light navbar-position"
        }
      >
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
              <div className="nav-link-item phone-icon">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                +91-8887756502
              </div>
              <div className="d-flex me-5">
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
