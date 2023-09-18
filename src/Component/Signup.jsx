import { useState } from 'react'
import { FcGoogle} from "react-icons/fc";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import GoogleLogin from "react-google-login";

export default function Signup() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
    ? JSON.parse(localStorage.getItem('loginData'))
    : null
  );


  const handleFailure = (result) => {
     alert(result);
  };
  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type' : 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

 
  


  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }
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
    
    //  const googleAuth = () => {
      
    //   window.open(
    //       `${process.env.REACT_APP_API_URL}/auth/google/callback`,
    //       "_self"
          
    //   );
     // navigate("/")
      
    
      
    
   
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

             <button className="bg-blue-950 text-white text-sm font-normal hover:bg-black text-center ml-20 mt-5 md:ml-24 w-[8rem] h-[3rem] md:w[10rem] md:h-[2rem]">Sign Up</button>
             <p className="text-center font-medium py-3">Or</p>
             <button className="bg-blue-950 text-white text-sm font-normal hover:bg-black text-center ml-20 mt-5 md:ml-20 w-[10rem] h-[3rem] md:w[12rem] md:h-[2rem]">Sign Up with Google
             <FcGoogle className="-mt-4 mx-[2px]" />
             </button>
            
             <div>
               {
              loginData ? (
                <div>
                  <h3>You logged in as {loginData.email}</h3>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ): (
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                >
                 </GoogleLogin>
                
              )}

             
                 
              </div>
          </form>
          
    
    </div>
  )
}
