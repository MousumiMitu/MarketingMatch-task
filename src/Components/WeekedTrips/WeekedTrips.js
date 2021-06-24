import React from "react";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkedAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import travel from "../../images/wanderon-bir-1.jpg";
import travel1 from "../../images/wanderon-manali-1 (1).jpg";
import travel2 from "../../images/wanderon-kasol-1 (1).jpg";
import travel3 from "../../images/wanderon-bir-1 (1).jpg";
import travel4 from "../../images/wanderon-parvati-1.jpg";
import travel5 from "../../images/wanderon-chopta-1.jpg";
import travel6 from "../../images/wanderon-tirthan-1.jpg";

const WeekedTrips = () => {
  return (
    <div className="my-5  trending-container">
      <h2>Weekend Trips</h2>
      <Swiper
        navigation={true}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper my-5 "
      >
        <SwiperSlide>
          <div>
            <img src={travel} alt="" />

            <div className="d-flex justify-content-lg-start">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 1N-2D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Bir Billing</h4>
                <h5>
                  starts at{" "}
                  <FontAwesomeIcon icon={faRupeeSign} className="mx-1" />
                  6,999/-
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel1} alt="" />{" "}
            <div className="">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 2N-3D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />
                  Delhi
                </span>
                <h4>Manali Lahaul Atal Tunnel </h4>
                <h5>
                  starts at{" "}
                  <FontAwesomeIcon icon={faRupeeSign} className="mx-1" />
                  6,999/-
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel2} alt="" />{" "}
            <div className="d-flex justify-content-lg-start">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 2N-3D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Kasol Kheerganga </h4>
                <h5>
                  starts at{" "}
                  <FontAwesomeIcon icon={faRupeeSign} className="mx-1" />
                  5,499/-
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel6} alt="" />{" "}
            <div className="d-flex justify-content-lg-start">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 2N-3D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Tirthan Valley</h4>
                <h5>
                  starts at{" "}
                  <FontAwesomeIcon icon={faRupeeSign} className="mx-1" />
                  6,499/
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel5} alt="" />{" "}
            <div className="d-flex justify-content-lg-start">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 2N-3D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Chopta Tungnath</h4>
                <h5>starts at 6,999/-</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel3} alt="" />{" "}
            <div className="d-flex justify-content-lg-start">
              <div className="slider-info">
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 2N-3D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Bir Mcleod Ganj</h4>
                <h5>
                  starts at{" "}
                  <FontAwesomeIcon icon={faRupeeSign} className="mx-1" />
                  8,999/-
                </h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WeekedTrips;
