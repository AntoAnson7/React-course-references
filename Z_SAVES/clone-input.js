import './App.css';
import { useState } from 'react'


function App() {  
  let [type,setType]=useState("")
  const setVal=(event)=>{
    setType(
      type=event.target.value
    )
  }
  return (    
    <>
    <input type={"text"} onChange={setVal} style={{width:"400px",height:"30px"}}/>
    <h2 style={{color:"red"}}>{type}</h2>
    </>
  )
}


export default App;

