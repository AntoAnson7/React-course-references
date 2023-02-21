import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import {Home} from "./pages/home"
import {Login} from "./pages/login"
import {Contact} from "./pages/contact"
import {Provider} from 'react-redux'
import {store} from './store'

function App() {

  return (    
    <>
    <div className='App'>
    <Provider store={store}>
    <Router>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">contact</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<h1>404! Page Not Found!</h1>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
    </>
  )
} 

export default App;

