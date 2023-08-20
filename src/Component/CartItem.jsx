import  { ChevronDown, ChevronUp} from "../Icon";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch} from "react-redux";


const CartItem = ({id, img, title, price, amount}) => {

    const dispatch = useDispatch();

  return (
    <article className="cart-item">
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">#{price}</h4>
            <button className="remove-btn"
            onClick={() => {
                dispatch(removeItem(id));
            }}>remove</button>
        </div>
      
     <div className="group-btn">
         <div>
            <button className="increase-btn" onClick={()=> {
                dispatch(increase({id}))
            }}>
                <ChevronUp />
            </button>
        </div>
        <p className="amount">{amount}</p>
        <div>
            <button className="decrease-btn" onClick={() => {
                if(amount ===1){
                   dispatch(removeItem(id));
                   return
                }
                dispatch(decrease({id}))
            }}>
                <ChevronDown />
            </button>
        </div>
     </div>
    </article>
  )
}

export default CartItem;