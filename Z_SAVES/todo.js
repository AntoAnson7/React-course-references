import './App.css';
import { useState } from 'react'

function App() {  
  let [tasks,setTasks]=useState([])
  let [newTask,setNewTask]=useState("");
  let [isChecked,setCheck]=useState(false)
  const addTask=()=>{
    if(newTask!==""){
      const newList=[...tasks,newTask]
      setTasks(newList)
    }

  }

  const handle=()=>{
  setCheck(!isChecked)
  }

  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }

  return (    
    <>
    <div className='App'>
    <div className='add-tasks'>
      <input type={"text"} onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
    {tasks.map((a,i)=><li style={{color: isChecked===true?"green":"red"}}><input type={"checkbox"} onChange={handle}/>{a}</li>)}
    </div>
    </div>
    
    </>
  )
}


export default App;

