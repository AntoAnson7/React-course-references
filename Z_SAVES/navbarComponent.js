import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (
        <>
        <div className="Navbar" 
        style={
            {display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            height:"60px",backgroundColor:"lightblue"
                }
                    }> 
        <h1>AMAZON</h1>
        <div className="Links" style={{display:"flex",gap:"30px",alignItems:"center",marginRight:"50px"}}>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link></div>
        </div>
        </>
    )
}