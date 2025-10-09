import "./index.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
//import React, { useState } from 'react';
import Header from "./component/header";
import SideBar from "./component/sidebar";
import CardsLits from "./component/products";
import Commande from "./component/Commande";
import ResumeCommande from "./component/ResumeCommande";
import ListesCommandes from "./component/ListeCommande";
function App() {
  return (
    <>
      <Header />
      <section className="flex justify-between gap-[2rem] max-w-[90vw] mx-auto">
        <SideBar />
        <CardsLits />
      </section>
      <section>
      <h1 className="text-[1.7rem] mb-4 font-somibold text-center ">New et Resume du Commande</h1>
        <div id="Checkout" className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between max-w-[90vw] mx-auto my-5">
          <Commande />
          <ResumeCommande />
        </div>
      
          <ListesCommandes />
        
      </section>
    </>
  );
}

export default App;
