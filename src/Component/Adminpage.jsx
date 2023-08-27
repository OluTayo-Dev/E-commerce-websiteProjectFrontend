import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import axios from "axios";
import {useState } from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function Adminpage() {
 const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    amount:""
 });
 const navigate = useNavigate();

 const handleOnChange = (e) => {
    setInput({...input, [e.target.id]: e.target.value})
 }

 const onSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:8002/api/admin/createProducts", input)
        .then((res) =>{
            console.log(res.data)
            setInput(res.data)
            navigate("/adminpage")
            alert("Product created successfully");
        })
    } catch (err) {
        console.log(err)
    }
 }
  return (
    <div>
     <section>
         <div>
         <nav className="fixed mx-auto w-[100%] top-[0] bg-transparent mix-blend-normal  shadow-xl z-50 p-6 opacity-100">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <p className="font-bold text-2xl text-brightRed">FARM<bold className="text-darkGrayishBlue">CONNECT</bold></p>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/product" className="hover:text-slate-500">Products</a>
            <a href="/cartContainer" className="hover:text-slate-500">Cart
            <TfiShoppingCart className="text-black font-extrabold ml-[35px] md:ml-[35px] -mt-5 "/>
            </a>
            <a href="/aboutUs" className="hover:text-slate-500">About Us</a> 
            <a href="admin" className="hover:text-slate-500">Admin</a> 
           <button type="button" className="bg-slate-500 w-[5rem] text-white hover:bg-darkGreen">
             <a href="/signup">Sign Up</a>
            </button>
           <button type="button" className="bg-slate-500 w-[5rem] text-white hover:bg-darkGreen"><a href="/login">Login</a>
           </button>
          </div>
        </div>
        </nav>
         </div>
     </section>

     <section>
        <div className="flex mt-24"> 
           
            <section>
               <div className="w-[40%] flex flex-col ml-[10rem]">
            
                  <h1 className="max-w-md text-lg font-bold text-darkGrayishBlue text-center pl-12">Profile</h1>
                  <span className="w-[8rem] h-[8rem] rounded-full bg-slate-200 shadow-lg my-6 mx-4">
                    <p className="mt-36">click to update profile</p>
                    <button type="submit" className=" bg-darkBlue w-[8rem] h-[3rem] text-center text-white">update profile</button>

                  </span>
                  
               </div>

            </section>

            <section>
                <div className="w-[60%] ml-[20rem]">
                <h1 className="max-w-md p-4 py-4 px-3 text-lg font-medium text-darkGrayishBlue">Product Details </h1>
                <form onSubmit={onSubmit} className="bg-slate-200 shadow-md w-[40vw] h-[70vh] rounded-lg border-2 border-darkBlue">
                    
                     
                 <label className="ml-[2rem]">Name:</label> <br />
                  <input type="text" placeholder="Enter product Name" 
                  className="w-[15rem] h-[3rem] focus:outline-0 ml-[2rem] px-2" 
                  value={input.text}
                  onChange={handleOnChange}
                  id="name"
                  /> <br/>
                  
                  <label className="ml-[2rem]">Price:</label> <br />
                  <input type="text" placeholder="Enter product Name" 
                  className="w-[15rem] h-[3rem] focus:outline-0 ml-[2rem] px-2" 
                   value={input.text}
                   onChange={handleOnChange}
                   id="price"
                    /> <br/>

                  <label className="ml-[2rem] ">Description:</label> <br />  
                  <input type="text" placeholder="Enter product Name" 
                  className="w-[15rem] h-[3rem] focus:outline-0 ml-[2rem] px-2" 
                   value={input.text}
                   onChange={handleOnChange}
                   id="desc"
                    /> <br/>


                   <label className="ml-[2rem] ">Image_url:</label> <br />
                  <input type="text" placeholder="Enter product Name" 
                  className="w-[15rem] h-[3rem] focus:outline-0 ml-[2rem] px-2" 
                  value={input.text}
                  onChange={handleOnChange}
                  id="image"
                  /> <br/>

                   <label className="ml-[2rem] ">Amount:</label> <br />
                  <input type="text" placeholder="Enter product Name" 
                  className="w-[15rem] h-[3rem] focus:outline-0 ml-[2rem] px-2" 
                   value={input.text}
                   onChange={handleOnChange}
                   id="amount"
                   /> <br/>


                 
                  <button type="submit" className=" bg-darkBlue w-[8rem] h-[3rem] text-center text-white ml-[5rem] mt-3">Create Product</button>



                    
                   

                </form>
                </div>
            </section>
        </div>
     </section>


    </div>
  )
}
