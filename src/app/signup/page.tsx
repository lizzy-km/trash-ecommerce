'use client';

import Link from "next/link";
import { useState } from "react";

interface User {
    email:string;
    password:string;
    username:string;
}

export default function SignUpPage () {

    const [user,setUser] = useState<User>({
        email:"",
        password:"",
        username:""
    });

    const onSignUp = async () => {

    }
    
     
    return(
        <div className=" flex flex-col gap-3 justify-center w-full items-center h-screen " >
            
            <h1 className=" text-3xl font-medium " >SignUp</h1>
            <hr />
            {/* Username */}
            <div className=" w-[30%]  p-5 rounded-lg justify-center items-center modernShadow " >
            <form className=" flex flex-col justify-start  w-[100%] h-auto  " >
            <label htmlFor="username" > Username </label>
        <input 
            className='w-2/2 bg-black rounded border px-5 py-3 mt-8 mb-6 focus:outline-none '  
            id="username"
            type='text' 
            placeholder="<UserName>" 
            value={user.username}
            onChange={(e) =>{ setUser({...user ,  username : e.target.value})}}
            />
            </form>
            {/* Email */}
            <form className=" flex flex-col justify-start w-[100%] h-auto  " >
            <label htmlFor="email" > Email </label>
        <input 
            className='w-2/2  bg-black rounded border px-5 py-3 mt-8 mb-6 focus:outline-none '  
            id="email"
            type='email' 
            placeholder="<Email>" 
            value={user.email}
            onChange={(e) =>{ setUser({...user ,  email : e.target.value})}}
            />
            </form>
            <form className=" flex flex-col justify-start w-[100%] h-auto  " >
            <label htmlFor="password" > Password </label>
        <input 
            className='w-2/2  bg-black rounded border px-5 py-3 mt-8 mb-6 focus:outline-none '  
            id="password"
            type='password' 
            placeholder="<Password>" 
            value={user.password}
            onChange={(e) =>{ setUser({...user ,  password : e.target.value})}}
            />
            {/* Password */}
            </form>

            <div className=" flex w-full justify-center gap-2 items-center " >

            <button onClick={()=>onSignUp()} 
            className= 'bg-slate-900 hover:bg-gray-800 transition duration-200 ease-in-out select-none cursor-pointer text-white font-bold py-2 px-4 rounded'>Sign Up!</button>
            <Link href={'/login'} className=" text-sm " >You have already account? <span className=" hover:text-blue-700 " >Login</span> </Link>
            </div>
           

             </div>
             
           
           

        </div>
    )
}