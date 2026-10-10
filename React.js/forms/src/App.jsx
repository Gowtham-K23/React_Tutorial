import React from 'react'
import { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted Data: ", formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
          type = "text"
          name = "username"
          placeholder = "Username"
          onChange={handleChange}
      />
      <input
          type = "text"
          name = "password"
          placeholder = 'Password'
          onchange = {handleChange}
      />

      <button type = "submit">Login</button>
    </form>
  )
}

export default App