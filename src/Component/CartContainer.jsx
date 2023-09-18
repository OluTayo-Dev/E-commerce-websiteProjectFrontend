import  CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart} from '../features/cart/cartSlice';



const CartContainer = () => {

    const dispatch = useDispatch();
    const {cartItems, total, amount} = useSelector ((store) => store.cart)
   
    const handleOnChange = (e) => {
      
    }
   if(amount < 1) {
   return (
    <section className="cart">
        <header>
            <h2>Your Items</h2>
            <h4 className="empty-cart">is currently empty</h4>
        </header>
    </section>
   );
 }

  return (
    
    <section className='cart'>
         <nav className="top-[0] bg-zinc-100 py-2 -mt-16 ">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <p className="font-bold text-2xl text-red-500">FARM<bold className="text-blue-950">CONNECT</bold></p>
          </div>
          <div className=" flex flex-1 justify-center">
          
          </div>
          <div className="hidden md:flex gap-4 font-medium">
            <a href="/" className="hover:text-slate-500">Home</a>
            <a href="/product" className="hover:text-slate-500">Products</a> 
            <a href="/aboutUs" className="hover:text-slate-500">About Us</a>
            <a href="/adminpage" className="hover:text-slate-500">Admin</a>
          </div>
        </div>
        </nav>
    <header>
    <div className="md:lg:hidden justify-center mb-6 flex gap-4 font-medium">
            <a href="/" className="hover:text-slate-500">Home</a>
            <a href="/product" className="hover:text-slate-500">Products</a> 
            <a href="/aboutUs" className="hover:text-slate-500">About Us</a>
            <a href="/adminpage" className="hover:text-slate-500">Admin</a>
          </div>
        <h2>Your Items</h2>
    </header>
    <div>
      {cartItems?.map((item) => {
        return <CartItem key={item.id} {...item} />
          
        
       })}
        </div>
   <footer>
    <hr />
    <div className="cart-total">
        <h4>
            total <span>#{total.toFixed(2)}</span>
        </h4>
    </div>
    <button className="btn clear-btn"
     onClick={() => dispatch(clearCart())}>
        clear cart
    </button>
     <button className="btn confirm-btn"
     onClick={handleOnChange}><a href="/paystackIntegration">Submit</a></button>
   </footer>
 </section>

  )
    
}
export default CartContainer;
