//import React from 'react'
import Chicken from "../Asset/Chicken.png";
import CatFish from "../Asset/CatFish.png";
import Broiler from "../Asset/Broiler.png";
import WholeChicken from "../Asset/WholeChicken.png";
import CowLiver  from "../Asset/CowLiver.jpg"
// import Suasage from "../Asset/Suasage.png";
//import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import {TfiShoppingCart} from "react-icons/tfi";
import {MdOutlineArrowRightAlt} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import './Homepage.css';
import { useState } from "react";



function Homepage() {
let [open, setOpen] = useState(false);
 
  return (


  <div>
    <div className="background h-screen">
    <nav  onClick={() => setOpen(!open)} className="text-3xl top-0 cursor-pointer sticky z-50 bg-slate-50">

        <span>
        <p className="font-bold text-2xl text-brightRed md:lg:hidden">FARM<bold className="text-darkGrayishBlue">CONNECT</bold></p>
        </span>
      <AiOutlineMenu name={open ? "close" : "menu"} onClick={() => setOpen(!open)} className="md:lg:hidden ml-[90%] text-darkBlue font-bold"/>
      <section className={`pb-12 absolute bg-slate-50 text-white md:lg:bg-white md:static md:z-0 z-[50] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
            open ? "top-0 opacity-100" : "top-[-490px]"
          } md:opacity-100 text-center `} >
      <header className="py-2 md:lg:flex md:lg:justify-between pl-20 shadow-md rounded-xl sticky top-0 z-50">
      <span>
      <p className="font-bold text-2xl text-brightRed">FARM<bold className="text-darkGrayishBlue">CONNECT</bold></p>
        </span>
        
        <ul className="md:lg:flex md:lg:gap-10 gap-6 md:lg:ml-52 mt-1 text-darkBlue font-semibold text-lg">
          <li>
            <a href="/" className="text-darkBlue font-medium hover:text-darkGrayishBlue">Home</a>
          </li>
          <li>
            <a href="/product" className="text-darkBlue font-medium hover:text-darkGrayishBlue">Products</a>
          </li>

          <li>
            <a href="/cartContainer" className="text-darkBlue font-medium hover:text-darkGrayishBlue">Carts<TfiShoppingCart className="-mt-[20px] md:lg:-mt-[20px] ml-16 md:lg:ml-16 text-darkBlue font-bold" /></a>
          </li>

          <li>
            <a href="/aboutUs" className="text-darkBlue font-medium hover:text-darkGrayishBlue">About Us</a>

          </li>
          <li>
            <a href="/adminLogin">Admin</a>

          </li>
        </ul>
        <span>
        <button className="md:ml-8 ml-20 md:lg:w-[8rem] w-[8rem] flex gap-6 bg-darkBlue hover:bg-darkGrayishBlue  md:lg:text-white px-8 rounded-none text-[17px]">
              {" "}
              
            <a href="/signup">Sign Up</a>
          </button>
        </span>
      </header>
      </section>
    </nav>
    </div>
   
    
     
    

      <section className="bg-white w-[100%]">
        <div className="flex flex-col space-y-12 items-center md:space-y-0">
          <h1 className="max-w-4xl text-3xl font-bold text-center md:text-6xl md:text-center pt-10 text-darkGrayishBlue shadow-sm baseline">You are Welcome to FARMCONNECT, Your Best plug for Poultry Products</h1>
          <p className="max-w-4xl text-lg font-medium text-center md:text-center text-black py-3">View the list of our Products Category Below</p>
        </div>
      </section>
         
       <section className="w-[100%]">
        <div className="flex flex-col items-center md:space-y-0 mt-8">
          <div className="flex flex-row  justify-center">
          <span className="flex flex-col text-darkGrayishBlue font-bold text-lg md:text-3xl">
            <p>Chicken  |</p>
          </span>

          <span className="flex flex-col text-darkGrayishBlue font-bold text-lg md:text-3xl">
            <p>Turkey  |</p>
          </span>

          <span className="flex flex-col text-darkGrayishBlue font-bold text-lg md:text-3xl">
            <p>Meat  |</p>
          </span>

          <span className="flex flex-col text-darkGrayishBlue font-bold text-lg md:text-3xl">
            <p>Egg  |</p>
          </span>

          <span className="flex flex-col text-darkGrayishBlue font-bold text-lg md:text-3xl">
            <p>Frozen Fish  </p>
          </span>
          </div>
        </div>
       </section>

       <section className="w-[100%]">
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col md:flex-row mb-32  md:w-1/2 w-1/2">
             <img src={Broiler} alt="" className="w-[100%] md:lg:w-[65%]" /> 
             <button type="button" className="bg-darkBlue text-white font-semibold text-lg w-[8rem] md:w-[10rem] h-[3rem] md:h-[3rem] md:mt-[34rem] mt-[5rem ]">
             <a href="/product">See More</a>
             <MdOutlineArrowRightAlt className="text-white -mt-5 ml-[8rem] text-xl"/>
             </button>
            
          </div>

          <div className=" flex flex-col md:flex-row w-1/2 md:w-1/2">
               <img src={WholeChicken} alt="cowliver" className="w-[100%] md:lg:w-[50%] h-[30%] shadow-lg  md:ml-[5rem]" />
               <button type="button" className="bg-darkBlue text-white font-semibold text-lg w-[8rem] md:w-[10rem] h-[3rem] md:h-[3rem] md:mt-[32rem] mt-[5rem] mr-[5rem]">
               <a href="/product">See More</a>
                 <MdOutlineArrowRightAlt className="text-white -mt-5 ml-[8rem] text-xl"/>
              </button>
            
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


export default Homepage;