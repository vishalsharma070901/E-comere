import "./App.css";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Login from "./Components/Login";

import Signup from "./Components/Signup";
import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/Product-list" element={<ProductList />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> 
          <Route path="/product" element={<Product/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
