//click event
function button()
{
    const handleClick = () => console.log("OUCH");
    return (<button onClick = {handleClick} > Click Me! </button>);
}
export default button