import React from 'react'

const Event1 = () => {
    const handleClick = (event) => {
        console.log(event)
        console.log(event.target)
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Event1