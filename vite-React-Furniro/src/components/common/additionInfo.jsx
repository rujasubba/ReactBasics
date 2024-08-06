import React from "react"
import { Icons } from "../../assets";
import "../../styles/additionInfo.scss"


function AddInfo(){
    return(
        <React.Fragment>
            <div className="additional-info">
                 <div className="item-cont">
                     <img src={Icons.Trophy} alt="trophy" />
                     <h3>High Quality</h3>
                     <p>crafted from top materials</p>
                 </div>
                 <div className="item-cont">
                     <img src={Icons.Guarantee} alt="warranty" />
                     <h3>Warranty Protection</h3>
                     <p>Over 2 years</p>
                 </div>
                 <div className="item-cont">
                      <img src={Icons.Shipping} alt="shipping" />
                     <h3>Free Shipping</h3>
                     <p>Order over 150 $</p>
                 </div>
                 <div className="item-cont">
                      <img src={Icons.CustomerSupport} alt="customersupport" />
                      <h3>24/7 Support</h3>
                     <p>Dedicated Support</p>
                 </div>
        </div>
        </React.Fragment>
    )
}

export default AddInfo;