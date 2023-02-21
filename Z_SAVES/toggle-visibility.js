import './App.css';
import { useState } from 'react'


function App() {  
  let [test,setTest]=useState(true)
  return (    
    <>
    <button onClick={()=>{setTest(!test)}}>Show/Hide</button>
    {test&&<h1>PEDRO</h1>}
    </>
  )
}


export default App;

