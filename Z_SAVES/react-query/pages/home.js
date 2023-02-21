import { useContext, useState } from "react"
import {AppContext} from "../App"
import {useQuery} from '@tanstack/react-query'
import Axios from "axios"

export const Home=()=>{
    const {user}=useContext(AppContext)
    // const [fact,setFact]=useState("")
    const {data,isLoading,refetch}=useQuery(["catfact"],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })

    return (
    <>
    <h1>Home</h1>
    <p>Name: {user}</p>
    <p>Fun Fact : {isLoading?"Loading...":data.fact}</p>
    </>
    )
}