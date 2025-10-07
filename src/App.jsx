import imgLogo from './assets/images/logo.png'
import './index.css'
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Product from './data/products.json';
import Header from './component/header'
import SideBar from './component/sidebar'
import Products from './component/products';
function App() {
  return (
   <>
   <Header/>
<SideBar/>
<Products/>
   </>
  )
}

export default App
