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
import { useNavigate } from "react-router-dom";
import './Homepage.css';



function Homepage() {
  const navigate = useNavigate();
  return (
  <div>

    <div className="background h-screen">
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
            <a href="#" className="hover:text-slate-500">About Us</a> 
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

      <section className="bg-white">
        <div className="flex flex-col space-y-12 items-center md:space-y-0">
          <h1 className="max-w-4xl text-4xl font-bold text-center md:text-6xl md:text-center md:ml-[8rem] pt-10 text-darkGrayishBlue shadow-sm baseline">You are Welcome to FARMCONNECT, Your Best plug for Poultry Products</h1>
          <p className="max-w-4xl text-xl font-medium text-center md:text-center text-black py-3">View the list of our Products Category Below</p>
        </div>
      </section>
         
       <section>
        <div className="flex flex-col space-y-12 items-center md:space-y-0 mt-8">
          <div className="flex flex-row  justify-center space-x-12">
          <span className="flex flex-col text-darkBlue font-bold text-2xl md:text-3xl">
            <p>Chicken  |</p>
          </span>

          <span className="flex flex-col text-darkBlue font-bold text-2xl md:text-3xl">
            <p>Turkey  |</p>
          </span>

          <span className="flex flex-col text-darkBlue font-bold text-2xl md:text-3xl">
            <p>Meat  |</p>
          </span>

          <span className="flex flex-col text-darkBlue font-bold text-2xl md:text-3xl">
            <p>Egg  |</p>
          </span>

          <span className="flex flex-col text-darkBlue font-bold text-2xl md:text-3xl">
            <p>Frozen Fish  </p>
          </span>
          </div>
        </div>
       </section>

       <section>
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col md:flex-row mb-32  md:w-1/2 w-1/2">
             <img src={Broiler} alt="" className="w-[50%]  md:ml-[5rem]" /> 
             <button type="button" className="bg-darkBlue text-white font-semibold text-lg w-[8rem] md:w-[10rem] h-[3rem] md:h-[3rem] md:mt-[34rem] mt-[26rem]">
             <a href="/product">See More</a>
             <MdOutlineArrowRightAlt className="text-white -mt-5 ml-[8rem] text-xl"/>
             </button>
            
          </div>

          <div className=" flex flex-col md:flex-row w-1/2 md:w-1/2">
               <img src={WholeChicken} alt="cowliver" className="w-[50%] h-[30%] shadow-lg  md:ml-[15rem]" />
               <button type="button" className="bg-darkBlue text-white font-semibold text-lg w-[8rem] md:w-[10rem] h-[3rem] md:h-[3rem] md:mt-[32rem] mt-[26rem] mr-[5rem]">
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