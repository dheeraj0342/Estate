import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Profile from './pages/Profile'


const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/about" element={<About/>} />
  <Route  path="/sign-in" element={<Signin/>} />
  <Route  path="/sign-out" element={<Signout/>} />
  <Route  path="/profile" element={<Profile/>} />
</Routes>
</BrowserRouter>
  )
}

export default App