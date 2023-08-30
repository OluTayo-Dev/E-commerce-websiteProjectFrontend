import React from 'react'
import { TfiShoppingCart } from 'react-icons/tfi';
import Turkey from "../Asset/Turkey.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

function AboutUs() {
  return (
   <div>
        <section className="w-[100%] h-[100%]">
        <nav className="fixed mx-auto w-[100%] top-[0] bg-transparent mix-blend-normal  shadow-xl z-50 p-6 opacity-100 ">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <p className="font-bold text-2xl text-brightRed">FARM<bold className="text-darkGrayishBlue">CONNECT</bold></p>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/product" className="hover:text-slate-500">Products</a>
            <a href="/cartContainer" className="hover:text-slate-500">Cart
            <TfiShoppingCart className="text-black font-extrabold ml-[35px] md:ml-[35px] -mt-5 "/>
            </a>
            <a href="/" className="hover:text-slate-500">Home</a> 
            <a href="/admin" className="hover:text-slate-500">Admin</a> 
          </div>
        </div>
        </nav>
        </section>

        <section>
            <div className="flex flex-col md:flex-row space-y-0 md:space-y-0    text-center md:text-left mt-36 min-h-screen">
                <div  className="flex flex-col md:flex-row  w-1/2">
                    <span className="flex ml-[10rem] -mb-10">
                    <h3 className=" text-4xl text-darkBlue font-bold text-center">About Us</h3>
                    <FcAbout className="text-4xl  text-darkBlue"/>
                    </span>
                    <p className="text-2xl pt-36 w-[100%] font-normal text-darkBlue max-w-md md:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, corporis numquam quis quisquam magnam asperiores! Cum porro, laboriosam veniam libero vel aliquid? Excepturi nemo iusto voluptatibus, odio optio pariatur molestiae!</p>
                    
                </div>

                <div className="w-1/2 ">
                    <img src={Turkey} alt="" className="w-[50%] md:ml-[10rem] lg:ml-[10rem]"/>
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col space-y-8 md:w-1/2 mb-[15rem]">
                <div className="flex flex-col space-y-3 md:space-y-0 space-x-6 md:flex-row">
                    <div className="roundred-lg-full bg-darkGrayishBlue md:bg-transparent">
                     <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkBlue">
                            Our Services
                        </div>
                        <h3 className="text-base font-normal md:mb-4 md:hidden">
                            Supply of Poultry Products
                        </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-normal md:block">
                            Home Delivery Service
                        </h3>
                        <p className="font-normal text-lg md:block">
                            Event Booking and Supply
                        </p>
                    </div>
                </div>
            </div>
        </section>

            
            <footer className="bg-veryDarkBlue h-[70%]">
            <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div>
            <p className="font-bold text-2xl text-brightRed">FARM<bold     className="text-darkGrayishBlue">CONNECT</bold></p>
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
              <a href="/" className="hover:text-darkGrayishBlue">Home</a>
              <a href="aboutUs" className="hover:text-darkGrayishBlue">About Us</a>
              <a href="admin" className="hover:text-darkGrayishBlue">Admin</a>
              <a href="cart" className="hover:text-darkGrayishBlue">Cart</a>

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

export default AboutUs;
