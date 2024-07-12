import React from "react";

import Logo from "../assets/Logo.png";
import cart from "../assets/Icons/cart.png"
import Profile from "../assets/Icons/Profile.png"
import Wishlist from "../assets/Icons/Wishlist.png"
import Search from "../assets/Icons/Search.png"


function Header() {
    return(
        <div>
            <div class ="main-header">
                <div class ="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div class="navbar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>
                <div class="icons" >
                    <a href="#"> <img src={Profile} alt="profile" /></a>
                    <a href="#"> <img src={Search} alt="search" /></a>
                    <a href="#"> <img src={Wishlist} alt="wishlist" /></a>
                    <a href="#"> <img src={cart} alt="cart" /></a>

                </div>

            </div>
            
        </div>
    )
}

export default Header;