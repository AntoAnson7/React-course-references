import './App.css';
import { useEffect, useState } from 'react'
import Axios from "axios"

// const api_url="https://api.agify.io/?name=emiliano"

function App() {
  const [name,setName]=useState("")
  const [age,setAge]=useState()

  const handleChange=(event)=>{
    const _name=event.target.value
    setName(_name)
  }

  const getData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data.age+" "+res.data.count)
      setAge(res.data.age)
    })
  }
  useEffect(()=>{
    getData()
  },[])


  const predictAge=(a)=>{
    setAge(a)
  }

  return (    
    <>
    <div className='App'>
      <input type="text" placeholder='Ex. Andres' onChange={handleChange}/>
      <button onClick={getData}>Predict Age</button>
      <h1>Age: {age}</h1>
    </div>
    </>
  )
}  


export default App;
// const [catFact,setCatFact]=useState("")
// const setFact=()=>{
//   Axios.get(api_url).then((res)=>{
//     setCatFact(res.data.fact)
//   })
// }
// useEffect(()=>{
//   setFact()
//   },[])
