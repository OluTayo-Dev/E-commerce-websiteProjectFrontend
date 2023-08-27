import { useState } from 'react'
import { FcGoogle} from "react-icons/fc";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    // const [loginPage, setLoginPage] = useState({
    //     page1: true,
    //     page2: false
    //   });
  
    const navigate = useNavigate();

      const [input, setInput] = useState({
        name: "",
        email: "",
        password:"",
      });
    
    const handleOnChange = (e) => {
       setInput({...input, [e.target.id]: e.target.value})
    }
   
     const onSubmit = async (e) => {
      e.preventDefault();
      try{
        await axios.post("http://localhost:8002/api/users/registerUser", input)
        .then((res) =>{
          console.log(res.data)
          setInput(res.data)
          navigate("/login");
          alert("User registerd successfully");
        })
      } catch (err){
        console.log(err)
      }
     };
    
      
    
   
  return (
    <div className="bg-zinc-100 w-[100%] h-screen flex flex-col items-center md:items-center">
          {/* {loginPage.page1 && ( */}
          <form onSubmit={onSubmit} className="bg-white shadow-xl rounded-lg md:w-[20rem] h-[25rem] md:mt-36">
            <h5 className="flex flex-col text-2xl pt-12 font-medium text-darkBlue text-center">Sign Up</h5>
            <input type="text"
             placeholder="Enter Username"
             value={input.text}
             id="text"
             onChange={handleOnChange}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:w-[15rem] md:h-[3rem] py-2 focus:outline-none" />

           <input type="email"
             placeholder="Enter Email"
             value={input.email}
             id="email"
             onChange={handleOnChange}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:w-[15rem] md:h-[3rem] py-2 focus:outline-none" />

            <input type="password"
             placeholder="Enter Password"
             value={input.password}
             id="password"
            onChange={handleOnChange}
             className="border-b-2 ml-10 w-[12rem] h-[2rem] md:w-[15rem] md:h-[3rem] py-2 focus:outline-none" />

             <button className="bg-darkBlue text-white text-sm font-normal hover:bg-black text-center ml-20 mt-5 md:ml-24 w-[8rem] h-[3rem] md:w[10rem] md:h-[2rem]">Sign Up</button>
             <p className="text-center font-medium py-3">Or</p>
             <button className="bg-darkBlue text-white text-sm font-normal hover:bg-black text-center ml-20 mt-5 md:ml-20 w-[10rem] h-[3rem] md:w[12rem] md:h-[2rem]">Sign Up with Google
             <FcGoogle className="-mt-4 mx-[2px]" />
             </button>
          </form>
          {/* )} */}
    
    </div>
  )
}
