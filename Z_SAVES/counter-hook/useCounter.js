import { useState } from "react"

export const useCounter=()=>{
    const [counter,setCounter]=useState(0)

    const dec=()=>{
        setCounter(counter-1)
    }

    const inc=()=>{
        setCounter(counter+1)
    }
    const reset=()=>{
        setCounter(0)
    }

    return [counter,dec,inc,reset];
}