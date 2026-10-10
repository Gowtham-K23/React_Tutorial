import React, { useState } from 'react'

const FormCon = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <input
            type = "text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
        />
        <h2>You typed: {name}</h2>
    </div>
  )
}

export default FormCon