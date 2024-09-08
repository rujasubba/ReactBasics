import React, { useEffect, useState } from 'react'
import { AppContext } from '../../context';


import "../../styles/layout/product.scss"
import ProductItem from '../common/products/ProductItem'

function Products() {

    const [products, setProducts] = useState([])

    async function fetchProducts() {
        try{
            const data =  await fetch('https://fakestoreapi.com/products')
            const response = await data.json()
            console.log(response);
            if (response?.length > 0) {
                setProducts((prevState) => [...prevState, ...response]);
            }
            
        }catch(e){}
       
    }
    useEffect(() =>{
        fetchProducts();
    }, []);
    
    return(
        <div className='container'>
            
            <div className='category-products'>
             {products?.map((item) => (
                <ProductItem
                 key={item?.id}
                 id={item?.id}
                 title={item?.title}
                 imgUrl={item?.image}
                 category={item?.category}
                 price={item?.price}

                />

            ))}
            
        </div>

        </div>
        
    )
}
export default Products;


