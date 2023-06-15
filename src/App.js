import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  // like: 
  // useEffect(()=>{}, []);
  // useEffect myfu = () => {}
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h2> External Users </h2>
      <p> {users.length}</p>
    </div>
  )
}

// 47.7
function Counter(){
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick={increaseCount}> Increase </button>
      <button onClick={decreaseCount}> Decrease </button>
    </div>
  )
}


// 47.6
/*
  const products =[
    {name: 'laptop' , price: 53000},
    {name: 'phone' , price: 93000},
    {name: 'watch' , price: 33000},
    {name: 'tablet' , price: 50000}
  ]
*/

/* 
    {
      products.map(product => <Product name={product.name} price={product.price}></Product>)
    }

    <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="50000"></Product> 
*/

function Product(props){
  return (
    <div className='product'>
      <h3> Name: {props.name}</h3>
      <p> Price: {props.price}</p>
    </div>
  )
}

export default App;
