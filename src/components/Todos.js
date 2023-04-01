import React, { useEffect, useState } from 'react'

import { databases } from '../Appwrite/Appwrite'

export const Todos = () => {

  const [todos,setTodos] = useState([])
  const [loader,setLoader] = useState(false)

  // const [output,setOutput] =useState("") 



  console.log(todos)

  useEffect(()=>{
    const response = databases.listDocuments("6427c6d20464df58bf36","6427c6dcd6bc73a91b81")


    response.then(
      function (response){
        setTodos(response.documents)
      },
      function (error){
        console.log(error)
      }
    )
  },[])

  const deleteasync = async (id) =>{
    console.log(id)
   const response = await databases.deleteDocument("6427c6d20464df58bf36","6427c6dcd6bc73a91b81","id")
   response.then(
    function (response){
      console.log(response)
    },
    function (error){
      console.log(error)
    }
   )
   window.location.reload()
  }


  return (
    <div>
       <div className="w-3/5 m-4 mx-auto">
        {loader ? (
          <p>loading the data please wait</p>
        ):(
          <div>
            {todos.map((todo)=>(
              <div key={todo.$id}>
                <div>
                  <p>{todo.todo}</p>
                </div>
                <div>
                  <span onClick={()=>deleteasync(todo.$id)}>Delete</span>
                </div>
              </div>
            ))}
          </div>
        ) }
      </div>
    </div>
  )
}
