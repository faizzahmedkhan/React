import React, {useState} from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <p id='para'>You have cliked {count} times</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}> Click me</button>
    </div>
    
  )
}

export default Counter
