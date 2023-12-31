import axios from "axios";
import React from 'react'
import { useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };

    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };

    const onSubmit =  async (e) => {
      e.preventDefault();

      const data = {
        email : email,
        password: password,
      };

      try{
        await axios.post("http://localhost:8002/api/users/authUser", data)
        .then((res) =>{
          console.log(res.data)
      
          navigate("/")
          alert("Login successfull!")
        })
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className="bg-zinc-100 w-[100%] h-screen flex flex-col items-center md:items-center">
        <form onSubmit={onSubmit} className="bg-white shadow-xl rounded-lg md:w-[20rem] h-[25rem] md:mt-36">
        
            <h5 className="flex flex-col text-2xl pt-6 mt-12 font-medium text-darkBlue text-center">Login</h5>

           <input type="email"
             placeholder="Enter Email"
             id="email"
             onChange={onChangeEmail}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:w-[15rem] md:h-[3rem] py-6 focus:outline-none" />

            <input type="password"
             placeholder="Enter Password"
             id="password"
             onChange={onChangePassword}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:w-[15rem] md:h-[3rem] py-6 focus:outline-none" />

             <button className="bg-blue-950 text-white text-sm font-normal hover:bg-black text-center ml-20 mt-12 md:ml-24 w-[8rem] h-[3rem] md:w[10rem] md:h-[2rem]">Login</button>
           
            
          </form>

    </div>
  )
}
