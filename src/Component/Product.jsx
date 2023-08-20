import React from 'react';
import axios from "axios";
import { useState} from "react";
import { useEffect } from "react";
import {CiSearch} from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import {TfiShoppingCart} from "react-icons/tfi";

export default function Product() {
const [products, getProducts] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8002/api/admin/getProducts")
  .then((response) => {getProducts(response.data)})
  .catch((error) => console.error(error))
},[])
console.log(products)


  return (
    <div>
     <section>
       <nav className="absolute mx-auto w-[100%] top-[0] bg-zinc-100 z-50 p-6">
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
            <a href="/cartContainer" className="hover:text-slate-500">Cart
            <TfiShoppingCart className="text-darkBlue font-extrabold ml-[35px] md:ml-[35px] -mt-5 "/>
            </a>
            <a href="/About Us" className="hover:text-slate-500">About Us</a> 
            <a href="/admin" className="hover:text-slate-500">Admin</a>
          </div>
        </div>
        </nav>
       </section>
       <div>
       <p className="max-w-xl text-xl font-medium text-center md:text-center text-black">View the list of our Products Below</p>
       </div>
      <section>
     
       <div className="flex flex-col space-y-8">
         <div className="grid grid-cols-4 gap-1 mt-[8rem]">
            {products.map((product) => {
              return (
               <div key={product} className="">
                <div className="items-center p-6 space-y-6">
                <div className="p-6 space-y-2 rounded-lg bg-gray-100 shadow-lg">
                  <img src={product.images} className="w-[5rem] h-[5rem] ml-[5rem]" />

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
                  <button type="button" className="bg-darkBlue text-white font-medium w-[7rem] h-[2rem] md:w-[8rem] md:h-[3rem] text-center items-center text-md rounded-sm ml-[6rem] md:ml-[6rem] pr-2 md:pr-3">Add to Cart
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

       <footer className="bg-veryDarkBlue">
        <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div>
            <p className="font-bold text-2xl text-brightRed">FARM<bold     className="text-darkGrayishBlue">CONNECT</bold></p>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="#">
              <FaFacebook className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="#">
              <FaInstagram className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="#">
              <BsTwitter className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

            </div> 
            
            

          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white font-medium">
              <a href="#" className="hover:text-darkGrayishBlue">Home</a>
              <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
              <a href="#" className="hover:text-darkGrayishBlue">Admin</a>
              <a href="#" className="hover:text-darkGrayishBlue">Cart</a>

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
                <button className="px-6 py-2 text-white rounded-none bg-brightRed hover:bg-brightRedLight focus:outline-none">
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
