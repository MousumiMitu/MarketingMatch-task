import React from "react";
import "./Explore.css";
import img from "../../images/backpacking-trips (1).png";
import img2 from "../../images/weekend-trips.png";
import img3 from "../../images/workcations.png";
import img4 from "../../images/scuba (2).png";
import img5 from "../../images/customised-trips.png";
import img6 from "../../images/corporate-trips.png";

const Explore = () => {
  return (
    <section className="my-5 text-center">
      <h2 style={{ color: "rgb(10, 158, 136)" }}>Explore WanderOn</h2>
      <div className="service-section my-5">
        <div className="service-card">
          <img src={img} alt="" className="service-img text-center" />

          <h5 className="service-title">
            Backpacking <br /> trips
          </h5>
        </div>
        <div className="service-card">
          <img src={img2} className="service-img2 text-center" alt="" />

          <h5 className="service-title">
            Weekend <br /> trips
          </h5>
        </div>
        <div className="service-card">
          <img src={img3} className="service-img text-center" alt="" />

          <h5 className="service-title">
            Workcations <br /> Stays
          </h5>
        </div>
        <div className="service-card">
          <img src={img4} className="service-img4 text-center" alt="" />

          <h5 className="service-title">
            Adventure <br /> courses
          </h5>
        </div>
        <div className="service-card">
          <img src={img5} className="service-img5 text-center" alt="" />

          <h5 className="service-title">
            Customised <br /> trips
          </h5>
        </div>
        <div className="service-card">
          <img src={img6} className="service-img6 text-center" alt="" />

          <h5 className="service-title">
            Corporate <br /> trips
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Explore;
