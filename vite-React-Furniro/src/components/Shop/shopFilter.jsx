import React from "react";
import { Icons } from "../../assets";
import { Images } from "../../assets";

import "../../styles/shop.scss"


function ShopFilter(){
    return(
        <React.Fragment>
          
          <div className="bg-container">
                 <h1>Shop</h1>
                 <div className="breadcrumb">
                     <span>Home</span> &gt; <span>Shop</span>
                 </div>

            </div>
            
         <div class="filterItems">
            <div className="filter-icons">
                 <span><img src={Icons.Filtering} alt="Grid"/></span>
                 <span>Filter</span>
                 <span><img src={Icons.Grid} alt="Grid"/></span>
                 <span><img src={Icons.List} alt="Grid"/></span>

            </div>
            <div className="filter-results">
                  <span>showing 1-16 of 32 results</span>
            </div>

            <div className="advanced-filter">
                 <label>Show</label>
                 <input type="number" placeholder="1"/>
                 <label>Sort By</label>
                 <input type="text" placeholder="Default"/>
            </div>
                             
                              
          </div>
         </React.Fragment>  


    )
}

export default ShopFilter;