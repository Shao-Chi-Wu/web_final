import React from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import {BrowserRouter as Router,} from 'react-router-dom';
//import louisa_drink from './menu/louisa_drink'
import Footer from './components/Footer';

function Louisa() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Footer />
    </Router>
  );
}

export default Louisa;
