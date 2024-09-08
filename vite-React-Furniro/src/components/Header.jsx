import React, { useContext } from "react";

import "../styles/layout/header.scss";

import { Icons, Branding } from "../assets";
import { NAVIGATION } from "../utils/constants";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

function Header() {

  const {cartData} = useContext(AppContext);
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
          
            <img src={Icons.Profile} alt="profile" />
            <img src={Icons.Search} alt="search" />
            <img src={Icons.Wishlist} alt="wishlist" />
            <Link to={"/cart"} className="cart-link">
            <img src={Icons.Cart} alt="cart" /> <span>{cartData?.length}</span>
            </Link>
            
          
        </div>
      </div>
    </div>
  );
}

export default Header;
