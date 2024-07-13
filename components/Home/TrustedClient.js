import React from "react";
import "../Home/TrustedClient.css";

export default function TrustedClient() {
  return (
    <div className="trusted-clients">
      <h2 className="trusted-clients-heading">TRUSTED CLIENTS</h2>
      <p className="trusted-clients-paragraph">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR
      </p>
      <div className="testimonial">
        <div className="clien-info">
          <div className="quote-icon">“</div>
        </div>
        <p>
          Integer congue elit non semper laoreet sed lectus orci posuere nisi
          tempor se felis ac mauris. Pellentesque inyd urna. Integer vitae felis
          vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam
          malesuada mauris etug met Curabitur laoreet convallis nisl
          pellentesque bibendum.
        </p>
        <p className="author">JOHN DEO</p>
        <p className="position">Managing Director</p>
        <div className="navigation"></div>
      </div>
      <button className="margin-left">&lt;</button>
      <button className="margin-left">&gt;</button>
    </div>
  );
}
