import React, { useEffect, useState } from 'react'

import { databases } from '../Appwrite/Appwrite'

export const Todos = () => {

  const [todos,setTods] = useState([])
  const [loader,setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    const getTodos = databases.listDocuments("64267811418b6d824c6c")

    getTodos.then(
      function (response){
        setTods(response.documents)
      },
      function (error){
        console.log(error)
      }
    )

    setLoader(false)
  })

  const deleteasync = async (id) =>{
   const response = await databases.deleteDocument("64267811418b6d824c6c",id)
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
            {todos && todos.map((todo)=>(
              <div key={todo.$id}>
                <div>
                  <p>item</p>
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
