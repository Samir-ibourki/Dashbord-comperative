import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import CardsLits from "./component/Products";
import Commande from "./component/Commande";

import ListesCommandes from "./component/ListeCommande";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <section className="flex justify-between gap-[2rem] max-w-[90vw] mx-auto">
              <SideBar />
              <CardsLits />
            </section>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <h1 className="text-[1.7rem] mb-4 font-somibold text-center ">
                New et Resume du Commande
              </h1>

              <Commande />
            </>
          }
        />

        <Route path="/orders" element={<ListesCommandes />} />
      </Routes>
    </>
  );
}
