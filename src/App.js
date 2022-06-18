import React from "react";
import SearchBar from "./SearchBar";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Footer from "./Footer";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <video playsInline autoPlay muted loop poster="#" id="background">
          <source src="#" type="video/webm" />
          <source src="#" type="video/mp4" />
        </video>

        <header className="viewport-header">
          <div className="container">
            <SearchBar />
            <Current />
            <Hourly />
            <Daily />
            <Footer />
          </div>
        </header>
      </div>
    </div>
  );
}
