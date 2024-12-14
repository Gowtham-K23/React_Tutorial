import React, {useState} from'react';

function MyComponent()
{
    const [name, setName] = useState("Nobody");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmp] = useState(false);

    const updateName = () => {
        setName("Spongebob")
    }
    const updateAge = () => {
        setAge(age + 1)
    }
    const updateEmp = () => {
        setEmp(false);
    }
    return(<div>
        
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Is employed?: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateEmp}>Set Age</button>
    </div>)
}
export default MyComponent