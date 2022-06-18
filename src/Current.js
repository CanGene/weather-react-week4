import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-sm-6 shadow-lg widget" id="daily">
          <div className="row h-100">
            <div
              className="
                    col-sm-8
                    d-flex
                    flex-column
                    align-items-center
                    justify-content-center
                  "
            >
              <h1 id="city">Burnaby</h1>
              <h3 id="description">Rainy</h3>
            </div>
            <div className="col-sm-4 iconNow">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
                id="weather-icon-now"
              />
              <h2 id="number">
                <span id="temp-number">25</span>
                <span className="units">
                  <span id="celsius">°C</span>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-sm-6 info">
          <div className="row">
            <div className="col-sm-4 mini widget above">
              <div className="FeelsLike">
                <div className="title">Feels Like:</div>
                <span className="data" id="feelsLike">
                  15
                </span>
                <span> °C</span>
              </div>
            </div>
            <div className="col-sm-4 mini widget above">
              <div className="Precipitation">
                <div className="title">Precipitation:</div>
                <span className="data" id="precipitation">
                  20
                </span>
                <span> mm</span>
              </div>
            </div>
            <div className="col-sm-4 mini widget above">
              <div className="Wind">
                <div className="title">Wind:</div>
                <span className="data" id="wind">
                  12
                </span>
                <span> m/s</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mini widget below">
              <div className="Humidity">
                <div className="title">Humidity:</div>
                <span className="data" id="humidity">
                  45
                </span>
                <span>%</span>
              </div>
            </div>
            <div className="col-sm-4 mini widget below">
              <div className="Pressure">
                <div className="title">Pressure:</div>
                <span className="data" id="pressure">
                  6
                </span>
                <span> hPa</span>
              </div>
            </div>
            <div className="col-sm-4 mini widget below">
              <div className="UVI">
                <div className="title">UVI:</div>
                <span className="data" id="uvi">
                  2
                </span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
