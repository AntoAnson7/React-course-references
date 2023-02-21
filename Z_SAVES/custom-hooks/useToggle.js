import { useState } from "react"

export const useToggle=(intialVal=false)=>{
    const [isVisible,setVisible]=useState(intialVal)
    const toggle=()=>{
        setVisible(isVisible===false?true:false)
    }

    return [isVisible,toggle]
}