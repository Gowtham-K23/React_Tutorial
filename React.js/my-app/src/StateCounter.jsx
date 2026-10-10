import React from 'react'
import { useState } from 'react'

const StateCounter = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    </>
  )
}

export default StateCounter