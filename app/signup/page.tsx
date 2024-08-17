"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
    const router = useRouter();

    const[user,setUser] = useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [loading, setLoading] = useState(false);


    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Sucess", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
            
        } finally {

        }

    };

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0)
    {
        setButtonDisabled(false);
    }
    else{
        setButtonDisabled(true);
    }

  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "SignUP"}</h1>
        <hr/>
        <label htmlFor="username">username</label>
        <input 
            id="username" 
            type="text" 
            value={user.username} 
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
        /> 
        <label htmlFor="email">email</label>
        <input 
            id="email" 
            type="text" 
            value={user.email} 
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
        /> 
        <label htmlFor="password">password</label>
        <input 
            id="password" 
            type="password" 
            className="text-black"
            value={user.password} 
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
        /> 
        <button onClick={onSignUp}>
            {buttonDisabled?  "not sign-up" : "sign up" }
        </button>
        <Link href="/login"> EDIT </Link> 
    </div>
  )
}

export default SignUp
