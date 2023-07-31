import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [name, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Home nameprops={name}/> }/>
    <Route path='/login' element={ <Login nameprops={name}/> }/>
    <Route path= '/signup' element={<Signup nameprops={name}/>}/>
    <Route path='/contact' element={<Contact nameprops={name}/> }/>



    </Routes>
    </BrowserRouter>  
  )
}

export default App
