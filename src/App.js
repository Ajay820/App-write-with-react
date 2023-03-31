import React from 'react'

import {Route,Routes} from "react-router-dom"
import { Signup } from './components/Signup'
import { Login } from './components/Login'

import { Profile } from './components/Profile'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  )
}
