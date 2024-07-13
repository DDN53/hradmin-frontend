import React from "react";
import "../Home/Stats.css";

export default function Stats() {
  return  <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">890</div>
                <div className="stat-label">Delivered <br/> Packages</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">137</div>
                <div className="stat-label">Countries <br/> Covered</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">740</div>
                <div className="stat-label">Tons of <br/> Goods</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">600</div>
                <div className="stat-label">Satisfied<br/> Clients</div>
            </div>
        </div>
}