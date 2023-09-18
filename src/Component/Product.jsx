import React from 'react';
import axios from "axios";
import { useState} from "react";
import { useEffect } from "react";
import {CiSearch} from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import {AiOutlineMenu } from "react-icons/ai";
import {TfiShoppingCart} from "react-icons/tfi";


export default function Product() {
const [products, getProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [open, setOpen] = useState(false);


const handleSearch = (e) =>{
  const keyword = e.target.value;

  if(keyword !== ""){
    const results = filteredProducts?.filter((data) =>{
     return (
      data.name?.toLowerCase().includes(keyword.toLowerCase()) ||
      data.description?.toLowerCase().includes(keyword.toLowerCase())

     )

    });
    getProducts(results)
  } else {
    getProducts(setFilteredProducts);
  }
}

useEffect(() => {
  axios.get("http://localhost:8002/api/admin/getProducts")
  .then((response) => {getProducts(response.data)})
  .catch((error) => console.error(error))
},[])
console.log(products)


return (
    <div>
     <section>
        <nav  onClick={() => setOpen(!open)} className="text-3xl top-0 cursor-pointer sticky z-50 bg-slate-50">

      <span>
      <p className="font-bold text-2xl text-red-500 md:lg:hidden">FARM<bold className="text-blue-950">CONNECT</bold></p>
    </span>
    <AiOutlineMenu name={open ? "close" : "menu"} onClick={() => setOpen(!open)} className="md:lg:hidden ml-[90%] text-darkBlue font-bold text-blue-950"/>
   <section className={`pb-12 absolute bg-slate-50 text-white md:lg:bg-white md:static md:z-0 z-[50] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
    open ? "top-0 opacity-100" : "top-[-490px]"
  } md:opacity-100 text-center `} >
   <header className="py-2 md:lg:flex md:lg:justify-between pl-20 shadow-md rounded-xl sticky top-0 z-50  ">
   <span>
  <p className="font-bold text-2xl text-red-500">FARM<bold className="text-blue-950">CONNECT</bold></p>
  </span>

   <ul className="md:lg:flex md:lg:gap-6 gap-6 md:lg:ml-52 mt-1 space-x-2 text-blue-950 font-semibold text-sm">
  <li>
    <a href="/" className="text-blue-950 font-medium hover:text-slate-400">Home</a>
  </li>

  <li>
    <a href="/cartContainer" className="text-blue-950 font-medium hover:text-slate-400">Carts<TfiShoppingCart className="-mt-[18px] md:lg:-mt-[18px] ml-16 md:lg:ml-12 text-blue-950 font-bold" /></a>
  </li>

  <li>
    <a href="/aboutUs" className="text-blue-950 font-medium hover:text-slate-400">About Us</a>

  </li>
  <li>
    <a href="/adminLogin" className="text-blue-950 font-medium hover:text-slate-400 px-4">Admin</a> 

  </li>
</ul>
        
</header>
</section>
</nav>
</section>


       <div className="flex flex-col mx-auto space-y-0 md:space-y-0 text-center md:text-center items-center">
       <p className="max-w-xl text-xl font-medium text-center md:text-center text-black">View the list of our Products Below</p>
       </div>
       <div className="flex flex-1 gap-6 justify-center md:lg:justify-center mt-12 md:lg:mt-12">
            <form>
              <div className="flex">
                <input type="text" placeholder="Search Products" 
                onChange={(event)=> handleSearch(event)}
                className="flex-1 bg-white px-4 border-b-2 border-black md:lgml[5rem] w-[10rem] md:lg:w-[18rem] focus:outline-0 text-black text-sm" /> 
                <CiSearch className=" mt-1 md:lg:mt-1 -ml-[35rem] md:lg:w-[35rem] text-slate-400 text-lg" />
              </div>
            </form>
          </div>

      <section>
       <div className="flex flex-col">
         <div className="grid grid-cols-4 gap-1 mt-[5rem] h-full min-h-[50vh]">
            {products.map((product) => {
              return (
               <div key={product} className="">
                <div className="items-center p-6 space-y-6">
                <div className="p-6 space-y-2 rounded-lg bg-gray-100 shadow-lg">
                  <img src={product.images} alt="" className="w-[5rem] h-[5rem] ml-[5rem]" />

                  <span className="flex gap-2"> 
                    <p className="font-bold">Name:</p>
                  <p>{product.name}</p>
                  </span>
                  <span className="flex gap-2"> 
                    <p className="font-bold">Price:</p>
                  <p>#{product.price}</p>
                  </span>
                  <span className="flex gap-2"> 
                    <p className="font-bold">Description:</p>
                  <p>{product.description}</p>
                  </span>
                  <span className="flex gap-2"> 
                    <p className="font-bold">Category:</p>
                  <p>{product.category}</p>
                  </span>
                  <button type="button" className="bg-blue-950 text-white font-medium w-[7rem] h-[2rem] md:w-[8rem] md:h-[3rem] text-center items-center text-md rounded-sm ml-[4rem] md:lg:ml-[4rem] pr-2 md:pr-3">
                    <a href="/cartContainer">Add to Cart</a>
                  <TfiShoppingCart className="text-white font-extrabold ml-[105px] md:ml-[105px] -mt-5 "/>
                  </button>
               </div>
               </div>
              </div>
              )
            })};
         </div>
       </div> 
       </section>

       <footer className="bg-blue-950 w-[100%] h-[70%]">
        <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div>
            <p className="font-bold text-2xl text-red-500">FARM<bold     className="text-slate-500">CONNECT</bold></p>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="f">
              <FaFacebook className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="Ig">
              <FaInstagram className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="Twitter">
              <BsTwitter className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

            </div> 
            
            

          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white font-medium">
              <a href="home" className="hover:text-slate-400">Home</a>
              <a href="aboutUs" className="hover:text-slate-400">About Us</a>
              <a href="admin" className="hover:text-slate-400">Admin</a>
              <a href="cart" className="hover:text-slate-400">Cart</a>

            </div>

            <div className="flex flex-col space-y-3 text-white font-medium">
              <h5>Contact Address</h5>
              <p>Progress Estate, Afobaje</p>
              <p>Ota, Ogun State</p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form>
              <div className="flex">
                <input type="text" className="flex-1 px-4 rounded-none focus:outline-none w-[10rem] h-[4rem]" placeholder="Send in your messages" />
                <button className="px-6 py-2 text-white rounded-none bg-slate-500 hover:bg-black focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Right Reserved
            </div>
          </div>

        </div>

       </footer>
    </div>
  )

}
  

