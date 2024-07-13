import React from "react";
import "./Slider.css";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { Background } from "../../assests";
export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-item">
        <div className="slider-mover">
          <div className="slider-button">2/2</div>
          <div className="slider-button">
            {" "}
            <FaArrowsLeftRight className="icon-large" />
          </div>
        </div>
      </div>
      <div className="slider-item-2">
        <header className="slider-header">
          <h1>LOGISTIC</h1>
        </header>
        <main>
          <h2 class="bold-text">Best Shipping</h2>
          <h1 className="card-heading">Partner</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
            aliquam dictum sapien, id sagittis augue malesuada eu.
          </p>
          <button>DISCOVER MORE</button>
        </main>
      </div>
      <div className="slider-item-3">
        <img className="img" src={Background} alt="background-image" />
        <div className="Water-mark">#cargotion Logistic</div>
      </div>
    </div>
  );
}
