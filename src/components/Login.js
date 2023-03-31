import React, { useState } from 'react'

import { account } from '../Appwrite/Appwrite'

import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

    const [user,setUser]= useState({
        email:"",
        password:""
    })

    const login = async(e)=>{
        e.preventDefault()
        try{
           const ans = await account.createEmailSession(user.email,user.password)
           console.log(ans)
            navigate("/profile")
        }
        catch(error){
            console.log(error)
        }
    }

    console.log(user)

  return (
    <div className="flex flex-col">
        <input className="bg-slate-800" type="text" placeholder="enter the email" onChange={(e)=>{setUser({
            ...user,
            email: e.target.value
        })}}/>
        <input className="bg-black" type="text" placeholder="enter the password" onChange={(e)=>{setUser({
            ...user,
            password: e.target.value
        })}}/>
        <button type="submit" onClick={login}>Submit</button>
    </div>
  )
}
