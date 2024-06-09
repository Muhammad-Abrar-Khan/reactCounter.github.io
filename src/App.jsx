import { useState } from 'react'

function App() {
  const [counter,setCounter]=useState(15)
  const addValue = () =>{
    if (counter<20){
      setCounter(counter+1)
    }
  }
  const removeValue = () =>{
    if (counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter App : {counter}</h1>
      <button
      onClick={addValue}>Increment</button>
      <button
      onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
