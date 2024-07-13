import React from "react";
import "../Home/Service.css";
import { service1, service2 } from "../../assests";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbLineDotted } from "react-icons/tb";
export default function Service() {
  return (
    <section className="our-services">
      <div className="topic">
        <h3 class="subheading">Real Solution, Real Fast</h3>
        <h2 class="main-heading">Best Global Logistic Solutions</h2>
      </div>

      <div className="services-container">
        <div className="service">
          <div className="service-img">
            <img src={service1} alt="service-1" />
          </div>
          <div className="service-into">
            <h3>Air Flight Services</h3>
            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
            <h5 className="more-info">
              {" "}
              <FaArrowCircleRight className="icon" />
              Read more
            </h5>
          </div>
        </div>

        <div className="service">
          <div className="service-img">
            <img src={service2} alt="service-2" className="image-custom-size" />
          </div>
          <div className="service-into">
            <h3>Drone Services</h3>
            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
            <h5 className="more-info">
              {" "}
              <FaArrowCircleRight className="icon" />
              Read more
            </h5>
          </div>
        </div>
      </div>

      <div className="transprot-info">
        <p className="bottom-text">
          Logistic and transport save your time.{" "}
          <span className="highlight-text">
            Find your solution <FaArrowCircleRight className="find-icon" />
          </span>
        </p>
      </div>

      <div className="transprot-slider">
        <TbLineDotted className="botte-style" />
      </div>
    </section>
  );
}
