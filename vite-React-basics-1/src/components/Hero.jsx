import React from "react";

import "../styles/layout/hero.scss";
import heroBg from "../assets/heroBg.png"


function Hero(){
    return(
        <React.Fragment>
            <div className= "hero-container" style={{ backgroundImage: `url(${heroBg})` }}>
                 <div class = "hero-box">
                     <p>New Arrival</p>
                     <h2>Discover Our New Collection</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> 
                      tellus, luctus nec ullamcorper mattis</p>
                     <button>Buy Now</button>
                    
                </div>
            </div>
            
        </React.Fragment>
    ) 
}

export default Hero;