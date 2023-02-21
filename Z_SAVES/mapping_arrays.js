import './App.css';

function App() {
  const users=[
    {name:"Anto",age:15},
    {name:"Isabelle",age:17},
    {name:"Thomas",age:19}
  ]
  return (
    <>
    <div className='test'>
      {users.map((val,key)=>{
        return (<>
            <h3>Name: {val.name}</h3>
            <h3>Age: {val.age}</h3>
        </>)
      })}
    </div>
    </>
  )
}


export default App;






// const GetName =(vals)=>{
//   return <h1>{vals.name}</h1>
// };
// const GetFull=()=>{
//   return <h1>Pedro Tech</h1>
// };

// const Job=(props)=>{
//   const retval=(
//     <div className='job'>
//   <h2>{props.company}</h2>
//   <h2>{props.position}</h2>
//   <h2>{props.salary}</h2></div>
//   )
//   return retval
// }