//onchange

import React, {useState} from 'react';

function MyComponent1()
{
    const [names, setName] = useState("Guest");

    const[quantity, setQuantity] = useState(0);

    const [payment, setPayment] = useState("");

    function handleNameChange(event)
    {
        setName(event.target.value);
    }

    function handleQuantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }
    return(<div>
        <input value = {names} onChange={handleNameChange}></input>
        <p>Name: {names}</p>

        <input value = {quantity} onChange={handleQuantityChange}></input>
        <p>Quantity: {quantity}</p>

        <select value = {payment} onChange={handlePaymentChange}>
            <option value = "">Select an option</option>
            <option value = "Visa">Visa</option>
            <option value = "MasterCard">MasterCard</option>
            <option value = "Gift Card">Gist Card</option>
        </select>
        <p>Payment: {payment}</p>

    </div>);
}
export default MyComponent1