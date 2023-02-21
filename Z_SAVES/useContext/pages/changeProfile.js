import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile=()=>{
    const [newUser,setNewUser]=useState("")
    const {setUser}=useContext(AppContext)
    const {user}=useContext(AppContext)
    return (
    <>
    <div className="ChangeProfile">
        <h3>Change Profile Name</h3>
        <input type="text" onChange={(event)=>{setNewUser(event.target.value)}}/>
        <button onClick={()=>{setUser(newUser)}}>change</button>
        <p>New Username: {user}</p>
    </div>
    </>
    )
}