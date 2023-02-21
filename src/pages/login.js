import { useState } from "react"
import {login,logout} from '../store'
import {useDispatch,useSelector} from 'react-redux'

export const Login=()=>{
    const [user,setUser]=useState("")
    const dispatch=useDispatch()
    const username=useSelector((state)=>state.user.value)
    return (
    <>
    <h1>Login</h1>
    {username!=""?<h2>Hey , {username}</h2>:<h2>Not Signed in</h2>}
    <input type={"text"} onChange={(event)=>setUser(event.target.value)}/>
    <button onClick={()=>dispatch(login(user))}>Submit</button>
    <button onClick={()=>dispatch(logout())}>logout</button>
    </>
    )
}