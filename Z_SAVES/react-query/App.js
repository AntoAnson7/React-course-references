import './App.css';
import { useEffect, useState ,createContext } from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Home} from "./pages/home"
import {Profile} from "./pages/profile"
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

export const AppContext=createContext()

function App() {
  const [user,setUser]=useState("Pedro")
  const Client=new QueryClient({defaultOptions:{
    queries:{refetchOnWindowFocus:false}
  }})
  return (    
    <>
    <div className='App'>
      <QueryClientProvider client={Client}>
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
      </QueryClientProvider>
    </div>
    </>
  )
} 

export default App;
