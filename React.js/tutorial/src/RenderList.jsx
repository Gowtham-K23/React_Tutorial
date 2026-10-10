import React from 'react'

const RenderList = () => {
    const users = ["John", "Alice", "Bob"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default RenderList