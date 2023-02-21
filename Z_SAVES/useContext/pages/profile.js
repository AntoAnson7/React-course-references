import { ChangeProfile } from "./changeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile=()=>{
    const {setUser}=useContext(AppContext)
    const {user}=useContext(AppContext)
    return (
    <>
    <div className="Profile">
        <h1>Profile</h1>
        <p>Profile Name :{user}</p>
        <ChangeProfile setuser={setUser}/>
    </div>
    </>
    )

}