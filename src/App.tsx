import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Product } from './containers/Product';
import "./containers/Product/Product.css"


function App() {
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => console.log(data))}, [])
    

 
  return (
    <div className="App">

     <Product />
    </div>
  );
}

export default App;
