import React from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Hero from './Hero';
import Product from './Product';
import NewArrival from './NewArrival';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Home = () => {

  return (
    <div>
        
        <Hero/>
        <Product name="Men"/>
        <NewArrival name="New Arrival"/>
        <NewsLetter/>
        <Product name="Women" />
        <Footer/>
        
        
      
    </div>
  )
}

export default Home
