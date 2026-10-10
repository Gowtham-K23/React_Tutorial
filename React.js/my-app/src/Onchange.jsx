import React, { useState } from 'react'

const Onchange = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }
  return (
    <div>
        <input
            type = "text"
            name = "name"
            placeholder = 'Enter name'
            onChange = {handleChange}
        />

        <input
            type = "email"
            name = "email"
            placeholder = 'Enter email'
            onChange={handleChange}
        />

        <h3>{formData.name}</h3>
        <h3>{formData.email}</h3>
    </div>
  )
}

export default Onchange