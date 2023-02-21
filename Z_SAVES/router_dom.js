import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import {Home} from "./pages/home"
import {Login} from "./pages/login"

function App() {
  return (    
    <>
    <div className='App'>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/loginNow">Register</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<h1>404! Page Not Found!</h1>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
} 

export default App;


// 
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (
        <>
        <div className="Navbar" 
        style={
            {display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            height:"60px",backgroundColor:"lightblue",
                }
                    }> 
        <h1>AMAZON</h1>
        <div className="Links" style={{display:"flex",gap:"30px",alignItems:"center",marginRight:"50px"}}>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link></div>
        </div>
        </>
    )
}

// NAVBAR EXAMPLE 