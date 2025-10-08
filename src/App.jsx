import "./index.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
//import productsItems from "./data/products.json";
import Header from "./component/header";
import SideBar from "./component/sidebar";
import Products from "./component/products";
import CardsLits from "./component/products";
function App() {


  return (
    <>
      <Header />
      <section className="flex justify-between gap-[] max-w-[90vw] mx-auto">
        <SideBar/>
        <CardsLits/>
      </section>
    </>
  );
}

export default App;
