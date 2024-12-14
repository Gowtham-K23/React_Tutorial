function list()
{
    const fruits = ['Apple','Orange','Banana','Pineapple']
    fruits.sort()

    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return(<ul>{listItems}</ul>)
    //return(<ol>{listItems}</ol>)
}
export default list