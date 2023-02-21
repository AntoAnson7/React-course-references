import { useContext } from "react"
import {AppContext} from "../App"

export const Home=()=>{
    const {user}=useContext(AppContext)

    return (
    <>
    <h1>Home</h1>
    <p>Name: {user}</p>
    </>
    )
}