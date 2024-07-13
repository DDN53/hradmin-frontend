import React from "react";
import "./WhyChooseus.css";
export default function WhyCooseUs() {
  return (
    <div className="why-choose-us">
      <h2 className="why-choose-us-heading">WHY CHOOSE US</h2>
      <p className="why-choose-us-paragraph">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR
      </p>
      <div className="reasons">
        <div className="reason">
          <p className="black-text">
            Dui ac hendrerit elementum quam ipsum auctor lorem
          </p>

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
            }}
          >
            +
          </button>
        </div>
        <div className="reason">
          <p className="black-text">Mauris vel magna a est lobortis volutpat</p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
            }}
          >
            +
          </button>
        </div>
        <div className="reason">
          <p className="black-text">
            Sed bibendum ornare lorem mauris feugiat suspendisse neque
          </p>

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
            }}
          >
            +
          </button>
        </div>
        <div className="reason">
          <p cclassName="black-text">
            Nulla scelerisque dul hendrerit elementum quam
          </p>

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "none",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
