import './App.css';
import { useEffect, useState ,createContext } from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Home} from "./pages/home"
import {Profile} from "./pages/profile"

export const AppContext=createContext()

function App() {
  const [user,setUser]=useState("Pedro")

  return (    
    <>
    <div className='App'>
      <AppContext.Provider value={{user,setUser}}>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<h1>404! Page Not Found!</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
    </>
  )
} 

export default App;
