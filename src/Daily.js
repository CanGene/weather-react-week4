import React from "react";
import "./Daily.css";

export default function Daily() {
  return (
    <div className="Daily">
      <div className="row">
        <div className="col-sm-12 shadow-lg widget" id="weekly">
          <div className="row">
            <div className="col-sm day">
              <h4 className="day-daily">Monday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">25 </span>|
                  <span className="low"> 25</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Tuesday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Wednesday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Thursday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Friday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Saturday </h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
            <div className="col-sm day">
              <h4 className="day-daily">Sunday</h4>
              <div>
                <img
                  className="weather-icon-daily"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon"
                ></img>
                <div className="temperature-daily">
                  <span className="high">21 </span>|
                  <span className="low"> 28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
