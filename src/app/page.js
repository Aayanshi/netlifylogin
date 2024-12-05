'use client'
import Login from "./components/login";
import Signup from "./components/signup";
import Create from "./components/create";
import BG from "../../public/images/bg.png"
import GIF from "../../public/images/girl.gif"
import { useState } from "react";

const Page=()=>{

const [linkText, setLinkText]= useState("Login");
const [form, setForm]=useState(true);

const handleaccount=()=>{
    if (linkText === "Sign Up") {
        setLinkText("Login");
        setForm(false); // Show Create component
      } else {
        setLinkText("Sign Up");
        setForm(true); // Show Login component
      }
}

    return(
        <div className="container md:container h-screen flex items-center justify-center m-auto " style={{ backgroundImage: `url('${BG.src}')`}}>
            <div className="w-9/12 md:flex bg-white p-5 items-center justify-between m-auto">
            <div className="w-1/2 block max-w-sm rounded-lg bg-white bg-cover border-r" >
            <img src={GIF.src} className="w-full"/>
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
              AUTOMATE ACROSS YOUR TEAMS
            </h2>
            <p className="text-black text-center mb-4 text-sm text-wrap">
             Sync Space Empowers Everyone In Your Business To Securely Automate
             Their Work In Minutes, 
             Not Months No Coding Required.
            </p>
            <button className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-500 focus:outline-none flex items-center justify-center m-auto ">
            Learn More
           </button>
      

{/* ---------- */}

        </div>
           <div className="w-1/2">
           {
            form?<Login /> :<Create/>
           }
            
            
            <div className="flex items-center my-6 ml-7">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-gray-500">Or</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex items-center justify-center ark:bg-gray-800">
                <button className=" w-full px-4 py-3 border flex gap-2
                    mt-3
                 border-[#C1D5F6]
                 dark:border-slate-500 
                 text-black dark:text-black bg-[#F2F2F2] rounded-md
                 hover:border-slate-400 
                 dark:hover:border-slate-500 hover:text-slate-800
                 dark:hover:text-slate-800
                   hover:shadow transition duration-150
                  ">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo " />
                    <span className="text-center w-full">Login with Google</span>
                </button>
            </div>
            
 
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                {form
                ? "Don't have an account?"
                : "Already have an account?"}{' '}
                <a onClick={handleaccount} className="text-cyan-500 hover:underline cursor-pointer">
                {linkText}
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Page;

{/* <button
type="submit"
className="w-full bg-slate-200 text-gray-800 py-3 px-4  mt-3 ml-7 rounded-sm
hover:bg-gray-200 
focus:outline-none">
 <img
src="logo.png" 
alt="Google"
className="w-5 h-5 mr-2"
/> 
Continue with Google
</button> */}