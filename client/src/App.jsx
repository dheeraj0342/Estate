import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

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