import React from "react";
import "../Home/News.css";
import { news1, news2, news3, news4 } from "../../assests";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
export default function News() {
  return (
    <section className="our-services">
      <div className="news-topic">
        <h1 className="latest-news">Latest News</h1>
        <span className="list-item">
          <div className="icon"></div>
          <span className="text">Integer congueelit</span>
        </span>
      </div>

      <div className="services-container">
        <div className="service">
          <div className="service-img">
            <img src={news1} alt="service-1" />
          </div>
          <div className="service-into">
            <h3>Air Flight Services</h3>
            <div className="info-container">
              <div className="info-text">
                <span className="info-title">Admin</span>
                <TbMessageCircle2Filled className="icon" />
                <span className="info-count">15</span>
              </div>
            </div>

            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-img">
            <img src={news2} alt="service-2" className="image-custom-size" />
          </div>
          <div className="service-into">
            <h3>Drone Services</h3>
            <div className="info-container">
              <div className="info-text">
                <span className="info-title">Admin</span>
                <TbMessageCircle2Filled className="icon" />
                <span className="info-count">15</span>
              </div>
            </div>

            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="service">
          <div className="service-img">
            <img src={news3} alt="service-1" />
          </div>
          <div className="service-into">
            <h3>Air Flight Services</h3>
            <div className="info-container">
              <div className="info-container">
                <span className="info-title">Admin</span>
                <TbMessageCircle2Filled className="icon" />
                <span className="info-count">15</span>
              </div>
            </div>

            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
          </div>
        </div>

        <div className="service">
          <div className="service-img">
            <img src={news4} alt="service-2" className="image-custom-size" />
          </div>
          <div className="service-into">
            <h3>Drone Services</h3>
            <div className="info-container">
              <div className="info-text">
                <span className="info-title">Admin</span>
                <TbMessageCircle2Filled className="icon" />
                <span className="info-count">15</span>
              </div>
            </div>

            <p className="three-lines">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
