import './App.css';
import { useEffect, useState } from 'react'
import Axios from "axios"

const api_url=""
//https://api.agify.io/?name=emiliano
function App() {
  const [catFact,setCatFact]=useState("")
  const setFact=()=>{
    Axios.get(api_url).then((res)=>{
      setCatFact(res.data.fact)
    })
  }
  useEffect(()=>{
    setFact()
    },[])

  

  return (    
    <>
    <div className='App'>
      <button onClick={setFact}>Generate Cat Fact</button>
      <h3>{catFact}</h3>
    </div>
    </>
  )
}  


export default App;
// https://randomuser.me/api
