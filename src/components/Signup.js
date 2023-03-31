import React from 'react'

import { useState } from 'react'

import {account}  from "../Appwrite/Appwrite"

import { useNavigate } from 'react-router-dom'

import {v4 as uuidv4} from "uuid"

export const Signup = () => {
    const navigate = useNavigate()
    const [user,setUser] =useState({
        name:"",
        email:"",
        password: ""
    })


    const signupuser = async (e)=>{
        e.preventDefault()

        const promise =  account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        )

        promise.then(
            function (response){
                console.log(response)
                navigate('/')
            },
            function (error){
                console.log(error)
            }
        )


    }
  return (
    <div className="flex flex-col">
        <input type="text" placeholder='Enter the email' onChange={(e)=>{setUser({
            ...user,
            email:e.target.value
        })}} />
        <input type="text" onChange={(e)=>{setUser({
            ...user,
            name:e.target.value
        })}} placeholder="enter the name"/>
        <input type="text" placeholder="Enter the password" onChange={(e)=>{setUser({
            ...user,
            password:e.target.value
        })}}/>
        <button type="submit" onClick={signupuser} >Submit</button>
    </div>
  )
}
