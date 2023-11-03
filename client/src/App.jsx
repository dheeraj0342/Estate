import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  return (
<BrowserRouter>
<Header></Header>
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/about" element={<About/>} />
  <Route  path="/sign-in" element={<Signin/>} />
  <Route  path="/sign-up" element={<Signup/>} />
  <Route element={<ProtectedRoute/>}>
  <Route  path="/profile" element={<Profile/>} />
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App