import React from 'react'
 import { useDispatch } from 'react-redux';
import {addToCart} from '../features/cart/cartSlice';


 function Item({id, title, image, price}) {
    
const dispatch = useDispatch()
  return (
    <div className="item">
        <div className="item-info">
            <p className="item-title">{title}</p>
            <p className="item__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <img
         src={image}
         alt="item"
         />
         <button>{addToCart}</button>
     
    </div>
  )
}
export default Item;




