import React from 'react'
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [input, setInput] = useState({
        email: "",
        password:""
      });
     const navigate = useNavigate();

      const handleOnChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
     }
     const onSubmit = async (e) => {
      e.preventDefault();
      try{
        await axios.post("http://localhost:8002/api/admin/createAdmin", input)
        .then((res) =>{
          console.log(res.data)
          setInput(res.data)
          navigate("/adminLogin")
          alert("Admin account created successfully")
        })
      } catch (err) {
        console.log(err)
      }
     }
  return (
    <div className="bg-zinc-100 w-[100%] h-screen flex flex-col items-center md:items-center">
        <form onSubmit={onSubmit} className="bg-white shadow-xl rounded-lg md:w-[20rem] h-[25rem] mt-36 md:lg:mt-36">
        
            <h5 className="flex flex-col text-2xl pt-6 mt-12 font-medium text-darkBlue text-center">Admin</h5>

           <input type="email"
             placeholder="Enter Email"
             value={input.email}
             id="email"
             onChange={handleOnChange}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:lg:w-[15rem] md:lg:h-[3rem] py-2 focus:outline-none" />

            <input type="password"
             placeholder="Enter Password"
             value={input.password}
             id="password"
             onChange={handleOnChange}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:lg:w-[15rem] md:h-[3rem] py-2 focus:outline-none" />

             <button className="bg-blue-950 text-white text-sm font-normal hover:bg-black text-center ml-20 mt-12 md:lg:ml-24 w-[8rem] h-[3rem] md:lg:w[10rem] md:lg:h-[2rem]">Login</button>
             
          </form>

    </div>
  )
}
