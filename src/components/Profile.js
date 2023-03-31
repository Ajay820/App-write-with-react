import React from 'react'

import { useState,useEffect } from 'react'

import { account } from '../Appwrite/Appwrite'

import { useNavigate,Link } from 'react-router-dom'
import { TodoForm } from './TodoForm'

import { Todos } from './Todos'

export const Profile = () => {
    const [userDetails,setUserDetails] = useState()
    const navigate = useNavigate()

    useEffect(()=>{

        const getData = account.get()

        getData.then(
            function (response){
                setUserDetails(response)
            }
            ,
            function(error){
                console.log(error)
            }
        )

    },[])

    console.log(userDetails)

    const handlelogout = async () => {
        try {
            await account.deleteSession("current")
            navigate("/")
        }
        catch(error){
            console.log(error)
        }
    }
    
  return (
    <>
        {userDetails ? (
            <>
                <div>
                    <p>{userDetails.name}</p>
                    <button onClick={handlelogout}>Logout</button>
                </div>
                <div>
                    <TodoForm />
                    <Todos />
                </div>
            </>
    
        ):(
            <div>
                <Link to="/">
                    <span>You have to sign in to see the todos</span>
                </Link>
            </div>
        )}
    </>

  )
}
