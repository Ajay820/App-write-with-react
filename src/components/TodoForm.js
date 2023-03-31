
import React from 'react'

import {useState} from "react"

import {v4 as uuidv4} from "uuid"

import { databases } from '../Appwrite/Appwrite'


export const TodoForm = () => {

  const [todo,setTodo] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()
   const promise = await databases.createDocument("6426783966148c804565",uuidv4(),{todo})

   promise.then(
    function(response){
      console.log(response)
    },
    function (error){
      console.log(error)
    }
   )

   window.location.reload()

  }

  console.log(todo)


  return (
    <div>
        <div className="w-2/4 mx-auto">
          <form onSubmit={handleSubmit}>
            <input className="bg-black text-white" type="text" onChange={(e)=>{setTodo(e.target.value)}}/>
            <button>AddTodo</button>
          </form>
      </div>
    </div>
  )
}
