import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Component/Homepage";
import Parent from "./Component/Parent";
import CartContainer from "./Component/CartContainer";
import { useDispatch, useSelector} from "react-redux";
import { calculateTotals} from "./features/cart/cartSlice";
import { useEffect } from "react";
 //import Modal from "./Component/Modal";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Admin from "./Component/Admin";
import Product from "./Component/Product";
import './App.css';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
   


  return (
   <BrowserRouter>
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="parent" element={<Parent />} />
       <Route path="signup" element={<Signup />} />
       <Route path="login" element={<Login />} />
       <Route path="admin" element={<Admin />} />
       <Route path="product" element={<Product />} />
       <Route path="cartContainer" element={<CartContainer />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
