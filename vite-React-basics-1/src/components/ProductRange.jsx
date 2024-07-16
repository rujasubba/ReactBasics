import React from "react";
import "../styles/layout/productRange.scss"

import { Images } from "../assets";

function ProductRange() {
    
    return (
        <React.Fragment>
            <div className="mainCategories">
                <div className="category__title">
                  <h2>Browse The Range</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="category__content">
                    <div className="category__content--item">
                        <img src={Images.DiningImg} alt="Dining" />
                        <h4>Dining</h4>
                    </div>
                    <div className="category__content--item">
                        <img src={Images.LivingImg} alt="Living" />
                        <h4>Living</h4>
                    </div>
                    <div className="category__content--item">
                        <img src={Images.BedroomImg} alt="Bedroom" />
                        <h4>Bedroom</h4>
                    </div>
                </div>
              
              
        </div>

        </React.Fragment>
        
    )
}

export default ProductRange;