import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  
  return (
    <div className="App">
    {/* <Counter></Counter> */}
    {/* <LoadUSerDetails></LoadUSerDetails> */}
    <GetUSers></GetUSers>
    </div>
  );
}

function GetUSers(){
  const [users, setUser] = useState([])
  console.log(users);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      {
        users.map(user => <User name = {user.name} website={user.website} email = {user.email} phone={user.phone}></User>)
      }
    </div>
  )
}
function User (props){
  return(
    <div className='product'>
      <h1>Name:{props.name} </h1>
      <p>Email: {props.email}</p>
      <strong>Phone: {props.phone}</strong>
      <p>Visit: {props.website}</p>
    </div>
  )
}

/* function LoadUSerDetails(){
  const [users, setUser] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
    
  },[])

  return (
    <div>
      <p>Number of Users: {users.length}</p>
      {
      users.map(user => <User name= {user.name} email = {user.email} phone= {user.phone}></User>)
    }
    </div>
    
  )
}
function User(props){
  return(
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
      <strong>Phone: {props.phone}</strong>
    </div>
  )
} */








function Counter (){
  /* const increaseValue = () =>{
    const newCount = count + 1;
    setCount(newCount)
  } */
  const [count, setCount] = useState(44);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return(
    <div>
      <h1>Count Number: {count}</h1>
      <h1><button onClick={increaseCount}>Increase</button></h1>
      <h1><button onClick={decreaseCount}>Decrease</button></h1>
    </div>
  )
}



























































/* const products =[
  {name: 'Laptop', price : 78000},
  {name: 'Mobile', price : 22000},
  {name: 'Smart Watch', price : 4000},
  {name: 'Desktop', price : 70000},
  {name: 'Laptop', price : 78000},
  {name: 'Mobile', price : 22000},
  {name: 'Smart Watch', price : 4000},
  {name: 'Desktop', price : 70000},
  {name: 'Laptop', price : 78000},
  {name: 'Mobile', price : 22000},
  {name: 'Smart Watch', price : 4000},
  {name: 'Desktop', price : 70000}
]; 
     {products.map(product => <Product name = {product.name} price={product.price}></Product>)}
    {
      products.map(product =><Product name = {product.name} price={product.price}></Product>)
    }

function Product(props){
  console.log(props);
  return(
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Price: <strong>{props.price}</strong></p>
    </div>
  )
}
*/


export default App;
