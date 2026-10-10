import React, { useState } from 'react'

const MiniProject = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

  return (
    <div tsyle = {{ textAlign: "center", marginTop: "40px" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <button onClick={() => setCount(count - 1)} style = {{ marginLeft: "10px"}}>
            Decrement
        </button>

        <hr style = {{ margin: "30px 0"}} />

        <button onClick={() => setShow(!show)}>
            {show ? "Hide Message" : "Show Message"}
        </button>

        {show && <p> This is a toggle message :) </p>}
    </div>
  )
}

export default MiniProject