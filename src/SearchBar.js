import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="row">
        <div className="col-sm-12 search-title-bar">
          <nav className="navbar navbar-light shadow-lg widget">
            <div className="container-fluid">
              <div className="navbar-brand" id="app-title">
                Under The Weather
              </div>
              <form className="d-flex" id="search-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for a city"
                  aria-label="Search"
                  id="search-city"
                  autoFocus
                  autoComplete="off"
                />
                <button
                  className="btn btn-outline-dark"
                  type="submit"
                  id="search"
                >
                  Search
                </button>
                <button type="button" className="btn btn-dark" id="here">
                  ⚐
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
