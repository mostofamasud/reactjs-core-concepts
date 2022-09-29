import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
    <Counter></Counter>
    </div>
  );
}

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
