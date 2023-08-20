import  CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/ModalSlice";
import {CiSearch} from "react-icons/ci";

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems, total, amount} = useSelector ((store) =>store.cart)
   
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
         <nav className="absolute w-[100%] h-[8%] top-[0] bg-zinc-100 py-2">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <p className="font-bold text-2xl text-brightRed">FARM<bold className="text-darkGrayishBlue">CONNECT</bold></p>
          </div>
          <div className=" flex flex-1 justify-center">
            <form>
              <div className="flex">
                <input type="text" placeholder="Search Products" className="flex-1 bg-zinc-100 px-4 border-b-2 border-black  w-[25rem] focus:outline-0 text-md" />
                <CiSearch className="-ml-[25rem] mt-1 text-black" />
              </div>
            </form>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-slate-500">Home</a>
            <a href="/About Us" className="hover:text-slate-500">About Us</a> 
            <a href="/admin" className="hover:text-slate-500">Admin</a>
          </div>
        </div>
        </nav>
    <header>
        <h2>Your Items</h2>
    </header>
  
   <div>
    {cartItems.map((item) => {
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
     onClick={() => dispatch(openModal())}>
        clear cart
    </button>

   </footer>
 </section>

  )
    
}
export default CartContainer;
