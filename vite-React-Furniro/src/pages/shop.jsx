import React from 'react';
import Products from '../components/Product/index';
import ShopFilter from '../components/Shop/shopFilter';

import "../styles/shop.scss"
import { useState } from 'react';

function Shop(){
    const [limit, setLimit] = useState(20);
    return(
        <div>
            <ShopFilter setLimit={setLimit} limit={limit}/>
            <Products limit={limit}/>
        </div>

    )
}

export default Shop;