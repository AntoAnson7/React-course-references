import { useState } from 'react';
import './App.css';
import {useToggle} from "./useToggle"

function App() {
  const [isVisible,toggle]=useToggle()
  return (    
    <>
    <div className='App'>
    <button onClick={toggle}>{isVisible?"Hide":"Show"}</button>
    {isVisible?<p>Hiden Text</p>:""}
    </div>
    </>
  )
} 

export default App;


//https://randomuser.me/api