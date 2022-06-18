import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row footer">
        <div className="col-sm-6 timeUpdate">
          <div className="footerL">
            <span id="date"></span>
            <span id="time"></span>
            <span id="time-update"> Last updated</span>
          </div>
        </div>
        <div className="col-sm-6 creditLine">
          <div className="footerR">
            <p>
              <a href="https://github.com/CanGene/Weather-App" id="credit">
                Open-source code
              </a>
              <span> by Candace Genesis</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
