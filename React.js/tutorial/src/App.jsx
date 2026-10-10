// useEffect

import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log("Component Mounted")
  }, []);
  return (
    <div>App</div>
  )
}

export default App