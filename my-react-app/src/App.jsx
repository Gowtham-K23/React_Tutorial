import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './button.jsx'
import Student from './student.jsx'
import UserGreeting from './userGreeting.jsx'
import List from './list.jsx'
import Click from './clickevent.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './counter.jsx'
import MyComponent1 from './MyComponent1.jsx'

function App() 
{
  return(
    <>
    <Header></Header>
    <Food/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Footer/>
    <Student name = "Spongebob" age = {30}/>
    <Student name = "Ben 10" age = {30}/>
    <Student name = "Ash Ketchum" age = {30}/>
    <Student name = "Bheem" age = {30}/>
    <UserGreeting isLoggedIn = {false} username = "Bro Code"/>
    <List/>
    <Click/>
    <MyComponent/>
    <Counter/>
    <MyComponent1/>
    </>
  );
}

export default App
