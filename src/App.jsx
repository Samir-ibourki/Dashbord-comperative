import "./index.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
//import React, { useState } from 'react';
import Header from "./component/header";
import SideBar from "./component/sidebar";
import CardsLits from "./component/products";
import Commande from "./component/Commande";
import ResumeCommande from "./component/ResumeCommande";

function App() {
  return (
    <>
      <Header />
      <section className="flex justify-between gap-[2rem] max-w-[90vw] mx-auto">
        <SideBar />
        <CardsLits />
      </section>
      <section>
        <div>
          <Commande />
          <ResumeCommande />
        </div>
        <div>
          
        </div>
      </section>
    </>
  );
}

export default App;
