import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../images/cover-travellers (1) (1).png";
import cover2 from "../../../images/cover-star.png";
import cover3 from "../../../images/cover-destination (1).png";

const Header = () => {
  return (
    <section className="header-section">
      <Navbar />
      <div className="header-content">
        <div className="text-heading text-center">
          <h1>India's Coolest Travel Community</h1>
          <h3>
            <Typical
              steps={[
                "Spreading Happiness",
                1000,
                "Connecting people",
                1000,
                "Creating memories",
                1000,
                "Creating Stories",
                1000,
                "Fulfilling Adventure",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h3>
          <div className="search-box ">
            <input
              type="text"
              className="search-text"
              placeholder="Where do you wanna go?"
            />
            <a href="" className="search-btn">
              <FontAwesomeIcon icon={faSearch} className="me-2 search-icon" />
            </a>
          </div>
          <div className="icon-area">
            <div className="icon-card">
              <img src={cover} alt="" />
              <h4>50000+</h4>
              <h4>Happy Travellers</h4>
            </div>
            <div className="icon-card">
              <img src={cover2} alt="" />
              <h4>2000+</h4>
              <h4>5 Star Ratings</h4>
            </div>
            <div className="icon-card">
              <img src={cover3} alt="" />
              <h4>300+</h4>
              <h4>Itineraries</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
