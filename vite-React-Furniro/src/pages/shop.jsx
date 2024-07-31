import React from 'react';
import Products from '../components/Product/index';
import ShopFilter from '../components/Shop/shopFilter';

import "../styles/shop.scss"

function Shop(){
    return(
        <div>
            <ShopFilter />
            <Products />
        </div>

    )
}

export default Shop;