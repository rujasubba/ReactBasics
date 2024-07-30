import React from 'react';
import Products from '../Product';
import ShopFilter from './shopFilter';

import "../../styles/shop.scss"

function Shop(){
    return(
        <div>
            <ShopFilter />
            <Products />
        </div>

    )
}

export default Shop;