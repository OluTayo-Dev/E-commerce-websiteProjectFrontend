import React from 'react'
import { TfiShoppingCart } from 'react-icons/tfi';
import Turkey from "../Asset/Turkey.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

function AboutUs() {
 let [open, setOpen] = useState("")
  return (
   <div>
        <section className="w-[100%] h-[100%]">
        <nav  onClick={() => setOpen(!open)} className="text-3xl top-0 cursor-pointer sticky z-50 bg-slate-50">

        <span>
        <p className="font-bold text-2xl text-red-500 md:lg:hidden">FARM<bold className="text-blue-950">CONNECT</bold></p>
        </span>
      <AiOutlineMenu name={open ? "close" : "menu"} onClick={() => setOpen(!open)} className="md:lg:hidden ml-[90%] text-blue-950 font-bold"/>
      <section className={`pb-12 absolute bg-slate-50 text-white md:lg:bg-white md:static md:z-0 z-[50] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${
            open ? "top-0 opacity-100" : "top-[-490px]"
          } md:opacity-100 text-center `} >
      <header className="py-2 md:lg:flex md:lg:justify-between pl-20 shadow-md rounded-xl sticky top-0 z-50">
      <span>
      <p className="font-bold text-2xl text-red-500">FARM<bold className="text-blue-950">CONNECT</bold></p>
        </span>
        
        <ul className="md:lg:flex md:lg:gap-10 gap-6 md:lg:ml-52 mt-1 text-darkBlue font-semibold text-[17px]">
          <li>
            <a href="/" className="text-blue-950 font-medium hover:text-slate-400">Home</a>
          </li>
          <li>
            <a href="/product" className="text-blue-950 font-medium hover:text-slate-400">Products</a>
          </li>

          <li>
            <a href="/cartContainer" className="text-blue-950 font-medium hover:text-slate-400">Carts<TfiShoppingCart className="-mt-[24px] md:lg:-mt-[24px] ml-16 md:lg:ml-16 text-blue-950 font-bold" /></a>
          </li>

          <li>
            <a href="/adminLogin" className="text-blue-950 font-medium hover:text-slate-300">Admin</a>

          </li>
        </ul>
        
      </header>
      </section>
    </nav>
        </section>

        <section>
            <div className="flex flex-col md:flex-row space-y-12 md:space-y-0  text-center md:text-left  min-h-screen mt-10 md:lg:mt-10">
                <div  className="flex flex-col md:flex-row  md:lg:w-1/2">
                    <span className="flex ml-[10rem] md:lg:text-center ">
                    <h3 className=" text-xl text-blue-950 font-bold text-center md:lg:text-center">About Us</h3>
                    <FcAbout className="text-4xl  text-blue-950"/>
                    </span>
                    <p className="text-lg md:lg:pt-24">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, corporis numquam quis quisquam magnam asperiores! Cum porro, laboriosam veniam libero vel aliquid? Excepturi nemo iusto voluptatibus, odio optio pariatur molestiae!</p>
                    
                </div>

                <div className="flex flex-col md:flex-row md:lg:w-1/2">
                    <img src={Turkey} alt="" className="w-[100%] ml-[5px] md:lg:ml-[5rem] lg:ml-[10rem] items-center"/>
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col md:w-1/2 mb-[30rem] md:lg:mb-[30rem]">
                <div className="flex flex-col space-y-3 md:space-y-0 space-x-6 md:flex-row">
                    <div className="roundred-lg-full bg-darkGrayishBlue md:bg-transparent">
                     <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 rounded-full md:py-1 bg-blue-950 text-white">
                            01
                        </div>
                        <h3 className="text-base font-normal md:mb-4">
                           Our Services:
                        </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className=" mb-4 text-lg font-normal md:block">
                            - Home Delivery Service
                        </h3>
                        <p className="font-normal text-lg md:block">
                            - Event Booking and Supply
                        </p>
                    </div>
                </div>
            </div>
        </section>

            
            <footer className="bg-blue-950 h-[70%]">
            <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div>
            <p className="font-bold text-2xl text-red-500">FARM<bold     className="text-slate-400">CONNECT</bold></p>
            </div>

            <div className="flex justify-center space-x-4">
              <a href="fb">
              <FaFacebook className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="IG">
              <FaInstagram className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

              <a href="twitter">
              <BsTwitter className="text-white font-medium w-[2rem] h-[2rem]"/>
              </a>

            </div> 
        
            

          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white font-medium">
              <a href="/" className="hover:text-slate-400">Home</a>
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

export default AboutUs;
