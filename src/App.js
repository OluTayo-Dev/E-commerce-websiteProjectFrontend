import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Component/Homepage";
import Parent from "./Component/Parent";
import CartContainer from "./Component/CartContainer";
import { useDispatch, useSelector} from "react-redux";
import { calculateTotals, getCartItems} from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Component/Modal";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Admin from "./Component/Admin";
import Product from "./Component/Product";
import AboutUs from "./Component/AboutUs";
import './App.css';
import Adminpage from "./Component/Adminpage";
import AdminLogin from "./Component/AdminLogin";
import PaystackIntegration from "./paystack/PaystackIntegration";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  //const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(calculateTotals());
  }, [cartItems]);
   
  useEffect(() => {
    dispatch(getCartItems('random'));
  },[]);


 if (isLoading) {
  return (
    <div className="loading">
    <h1>Loading....</h1>
    {isOpen && <Modal />}

    </div>
  )
 }


 
  return (
   <BrowserRouter>
    <Routes>

       <Route path="/" element={<Homepage />} />
       <Route path="/parent" element={<Parent />} />
       <Route path="signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/product" element={<Product />} />
       <Route path="/aboutUs" element={<AboutUs />} />
       <Route path="/cartContainer"  element={<CartContainer  />}  />
       <Route path="/adminpage" element={<Adminpage />} />
       <Route path="/adminLogin" element={<AdminLogin />} />
       <Route path="/paystackIntegration" element={<PaystackIntegration />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
