import React, { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import "swiper/components/navigation/navigation.min.css";
import travel from "../../images/wanderon-spiti-1 (1).jpg";
import travel1 from "../../images/wanderon-spiti-18.jpg";
import travel2 from "../../images/wanderon-ladakh-1.jpg";
import travel3 from "../../images/wanderon-manali-1.jpg";
import travel4 from "../../images/wanderon-parvati-1.jpg";
import travel5 from "../../images/wanderon-kasol-1.jpg";
import travel6 from "../../images/wanderon-meghalaya-1.jpg";

import "./TrendingTrips.css";

SwiperCore.use([Navigation]);

const Trendingtrips = () => {
  return (
    <div className="my-5 py-5 trending-container">
      <h2>Trending trips</h2>
      <Swiper
        navigation={true}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={travel} alt="" />
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel1} alt="" />{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel2} alt="" />{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel3} alt="" />{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel4} alt="" />{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel5} alt="" />{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
              </span>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" /> Delhi
              </span>
              <h4>Spiti Summer</h4>
              <h6>starts at -18,999/</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={travel6} alt="" />
            <div className="slider-info d-flex justify-content-lg-start">
              <div>
                <span>
                  <FontAwesomeIcon icon={faClock} className="me-1" /> 5N-6D
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="mx-1" />{" "}
                  Delhi
                </span>
                <h4>Spiti Summer</h4>
                <h6>starts at -18,999/</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trendingtrips;
