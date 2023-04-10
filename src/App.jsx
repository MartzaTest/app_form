import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import './assets/global_style/App.scss'
import Shop from './pages/shop_page/Shop'
import Product from './pages/product_page/Product';


import Header from './global_components/Header';
import Footer from './global_components/Footer';

function App() {
  

  return (
    <div className="App">
      <Header />
       <Router>
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/product" element={<Product />} />
          </Routes>
    </Router>
    <Footer />
    </div>
  )
}

export default App
