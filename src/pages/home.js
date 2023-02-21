import { useSelector } from "react-redux"

export const Home=()=>{
    const username=useSelector((state)=>state.user.value)
    return (
    <>
    <h1>Home</h1>
    {username!=""?<h2>Hey , {username}</h2>:<h2>Not Signed in</h2>}
    </>
    )
}