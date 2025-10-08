
import './index.css'
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Product from './data/products.json';
import Header from './component/header'
 import SideBar from './component/sidebar'
import Products from './component/products';
import CardsLits from './component/products';
function App() {
  return (
   <>
   <Header/>
<section className='flex justify-between max-w-[90vw] mx-auto'>
  <SideBar/>
<Products/>
</section>

   

   </>
  )
}

export default App
