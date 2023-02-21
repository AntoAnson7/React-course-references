import './App.css';
import { useState } from 'react'


function App() {
  let [counter,setCounter]=useState(0)
  const decCtr=()=>{
    setCounter(counter-=1)
  }
  const incCtr=()=>{
    setCounter(counter+=1)
  }
  return (    
    <>
    <button onClick={decCtr}>Decrement</button>
    {counter}
    <button onClick={incCtr}>Increment</button>
    </>
  )
}


export default App;

