import React from 'react'
import Login from './login'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Signup from './Signup'
import Home from './Home'





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App