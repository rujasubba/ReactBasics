import React from "react";

import "../styles/layout/header.scss";

import { Icons, Branding } from "../assets";
import { NAVIGATION } from "../utils/constants";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="main-header">
        <div className="logo">
          <img src={Branding.Logo} alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            {NAVIGATION.map((nav, index) => (
              <li key={index}>
                <Link to={nav.route}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="icons">
          <a href="#">
            <img src={Icons.Profile} alt="profile" />
          </a>
          <a href="#">
            <img src={Icons.Search} alt="search" />
          </a>
          <a href="#">
            <img src={Icons.Wishlist} alt="wishlist" />
          </a>
          <a href="#">
            <img src={Icons.Cart} alt="cart" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
