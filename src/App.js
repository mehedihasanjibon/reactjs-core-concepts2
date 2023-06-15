import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'laptop' , price: 53000},
    {name: 'phone' , price: 93000},
    {name: 'watch' , price: 33000},
    {name: 'tablet' , price: 50000}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="50000"></Product> */}
    </div>
  );
}

function Product(props){
  return (
    <div>
      <h3> Name: {props.name}</h3>
      <p> Price: {props.price}</p>
    </div>
  )
}

export default App;
