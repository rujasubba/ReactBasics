import React, { useMemo, useState } from "react";
import { Icons } from "../../assets";
import { Images } from "../../assets";

import "../../styles/shop.scss"
import {useSelector} from "react-redux";


function ShopFilter(props) {
     const {setLimit, limit} = props;
     const {products} = useSelector((state) => {
          return{
               products: state.product.payload,
          };
      });

      const number = useMemo(() => {
          return products.length;
      }, [products]);

      const handleLimitChange = (e) => {
          setLimit(e.target.value);
      };

    return(
        <React.Fragment>
          
          <div className="bg-container">
                 <h1>Shop</h1>
                 <div className="breadcrumb">
                     <span>Home</span> &gt; <span>Shop</span>
                 </div>

            </div>
            
         <div className="filterItems">
            <div className="filter-icons">
                 <span><img src={Icons.Filtering} alt="Grid"/></span>
                 <span>Filter</span>
                 <span><img src={Icons.Grid} alt="Grid"/></span>
                 <span><img src={Icons.List} alt="Grid"/></span>

            </div>
            <div className="filter-results">
                  <span>showing 1-{number} of 32 results</span>
            </div>

            <div className="advanced-filter">
                 <label>Show</label>
                 <input id="show-number" type="number" placeholder="1"
                   value={limit}
                    onChange={handleLimitChange}/>
                 <label>Sort By</label>
                 <input type="text" placeholder="Default"/>
            </div>
                             
                              
          </div>
         </React.Fragment>  


    )
}

export default ShopFilter;