import { useState } from 'react';
import { useCounter } from './useCounter';

function App() {
  const [counter,dec,inc,res]=useCounter()
  return (    
    <>
    <div className='App'>
      <button onClick={dec}>Dec</button>
      <h1>{counter}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={res}>Reset</button>
    </div>
    </>
  )
} 

export default App;

