import React, { useEffect, useState } from 'react'

import SingleItem from './singleItem'


function OneProduct() {

    const [products, setProducts] = useState([])

    async function fetchProduct() {
        const productListContainer = document.getElementById('product-list')
        const urlParams = new URLSearchParams(window.location.search)
        const elementId = urlParams.get('id')

    try{
        
        const data = await fetch(`https://fakestoreapi.com/products/${elementId}`) 
        
        
        const response = await data.json()
            
            
        }catch(e){}

     fetchProducts()
       
    }
    return(
        <div>
            <SingleItem
            
            />
        </div>
    )
}
export default OneProduct


