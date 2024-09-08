import React, { useContext } from "react";
import { Icons } from "../../../assets";
import {AppContext} from "../../../context";
import { showToastMessage } from "../../ui/ToastMessage";



function ProductItem({id, imgUrl, title, category, price}){
    const {setDataToCart} = useContext(AppContext);


    const addToCart = () => {
     const payload = {
      id,
      imgUrl,
      title,
      price,
     };

     setDataToCart(payload);
     showToastMessage({message:'Product has been added to the cart',
        type:'success'
     });

  };
    return(
        <React.Fragment>
             <div className="category__product--item"> 
                
                 <div className="image-container">
                     <img 
                     src={imgUrl} alt={title} />
                 </div>
                 <div className="product-description">
                     <h3>{title}</h3>
                     <p>{category}</p>
                     <h5>AUD {price}</h5>

                </div>
                <div className="overlay">
                      
                      <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
                      
                     <div className="action-lists">
                         <img src={Icons.Share} alt="Share" /><a href="#">Share</a>
                         <img src={Icons.Compare} alt="Compare"/><a href="#">Compare</a>
                         <img src={Icons.Like} alt="Like"/><a href="#">Like</a>
                     </div>
               </div>
             </div>

               
        </React.Fragment>
 
    )
}

export default ProductItem;

