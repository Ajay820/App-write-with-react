import React from 'react'

import {useState} from "react"

import {v4 as uuidv4} from "uuid"

import { databases } from '../Appwrite/Appwrite'


export const TodoForm = () => {

  const [todo,setTodo] = useState("")

  const handleSubmit =  (e)=>{
    e.preventDefault()
   const promise =  databases.createDocument("6427c6d20464df58bf36","6427c6dcd6bc73a91b81",uuidv4(),{
    todo
  })

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


// import { Client, Databases } from "appwrite";

// const client = new Client();

// const databases = new Databases(client);

// client
//     .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
//     .setProject('5df5acd0d48c2') // Your project ID
// ;

// const promise = databases.createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {});

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
