import React from 'react'
import Button from './Button'


const PropsFunc = () => {
    const greet = () => {
        alert('Button Clicked');
    };
  return <Button onClick = {greet} />
}

export default PropsFunc