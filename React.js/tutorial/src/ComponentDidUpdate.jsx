import React, { useEffect, useState } from 'react'

const ComponentDidUpdate = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])
  return (
    <>
        <h3>{count}</h3>
        <button onClick = {() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default ComponentDidUpdate