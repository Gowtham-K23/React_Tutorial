//condition rendering

function UserGreeting(props)
{
    if(props.isLoggedIn)
    {
        return <h2 className= "welcome-msg">Welcome {props.username}</h2>
    }
    else
    {
        return <h2 className="login">Please Login to continue</h2>
    }
}
export default UserGreeting