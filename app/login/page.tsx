"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const LogIn = () => {
    const[user,setUser] = useState({
        email: "",
        password: "",
    });

    const onSignUp = () => {

    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>SIGN-UP</h1>
        <hr/>
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
            value={user.password} 
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
        /> 
        <button onClick={onSignUp}>
            LogIn Here
        </button>
        <Link href="/signup"> EDIT </Link> 
    </div>
  )
}

export default LogIn;
