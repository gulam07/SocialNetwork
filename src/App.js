import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import './App.css';


function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path ='/' element={<Home />} />
         <Route path ='signin' element={<Signin />} />
         <Route path ='signup' element={<Signup />} />
         <Route path ='profile' element={<Profile />} />
         <Route path ='post' element={<CreatePost />} />
           
         
       </Routes>
    </BrowserRouter>
  )
}

export default App
