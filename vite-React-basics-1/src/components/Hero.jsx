import React from "react";

import "../styles/layout/hero.scss";

import { Images } from "../assets";

function Hero() {
  return (
    <React.Fragment>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${Images.HeroBg})` }}
      >
        <div className="hero-box">
          <p>New Arrival</p>
          <h2>Discover Our New Collection</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
            <br />
            tellus, luctus nec ullamcorper mattis
          </p>
          <button>Buy Now</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
