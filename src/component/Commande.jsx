// import { useState } from "react";
// import myproducts from "../data/products.json";
// import { OrdersContext } from "../content/OrdersContext";
// import { useNavigate } from "react-router-dom";
// export default function Commande() {
//   const [name, setName] = useState("");
//   const [telephone, setTelephone] = useState("");
//   const [quantity, setQuantity] = useState("");
//    const [selectedProduct, setSelectedProduct] = useState(myproducts[0].name);
//   const navigate = useNavigate();
//   return (
//     <section className="mb-8 w-[50%] mx-auto">
//       <form
//         className="bg-[#eee] py-7 flex flex-col gap-[1.3rem] shadow-xl"
//         onSubmit={(e) => {
//           e.preventDefault();
//           navigate("/orders");
//           console.log("hhh hi baby");
//         }}
//       >
//         <div className="flex justify-around">
//           <label value={name} htmlFor="Name">
//             FullName
//           </label>
//           <input
//             className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none"
//             id="Name"
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-around">
//           <label value={telephone} htmlFor="Telephone">
//             Telephone
//           </label>
//           <input
//             className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none"
//             id="Telephone"
//             type="text"
//             onChange={(e) => setTelephone(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-around">
//           <label htmlFor="Produit">Produit</label>
//           <select id="Produit" className="border rounded px-3 py-1">
//             {myproducts.map((product) => {
//               return (
//                 <option
//                   className="outline-none bordre-none"
//                   value={product.name}
//                 >
//                   {product.name}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="flex justify-around mb-6">
//           <label value={quantity} htmlFor="Quantity">
//             Quantity
//           </label>
//           <input
//             className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none"
//             id="Quantity"
//             type="number"
//             placeholder="1"
//             min={0}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-[#088178] text-white font-semibold py-2 w-[30%] mx-auto rounded-md cursor-pointer shadow-lg "
//         >
//           Buy now
//         </button>
//       </form>
//     </section>
//   );
// }


import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrdersContext } from "../content/OrdersContext.jsx";
import myproducts from "../data/products.json";

export default function Commande() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(myproducts[0].name);

  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = myproducts.find((p) => p.name === selectedProduct);
    const total = product.price * quantity;

    const newOrder = {
      id: Date.now(),
      client: name,
      telephone,
      products: [{ name: product.name, quantity }],
      total,
      status: "En attente",
    };

    addOrder(newOrder); // 🟢 نضيف الطلب للكونتكست
    navigate("/orders"); // 🔁 نمشيو للصفحة ديال الطلبات
  };

  return (
    <section className="mb-8 w-[50%] mx-auto">
      <form
        className="bg-[#eee] py-7 flex flex-col gap-[1.3rem] shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-around">
          <label htmlFor="Name">Full Name</label>
          <input
            className="border border-black rounded-md py-1 px-2 outline-none"
            id="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex justify-around">
          <label htmlFor="Telephone">Telephone</label>
          <input
            className="border border-black rounded-md py-1 px-2 outline-none"
            id="Telephone"
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>

        <div className="flex justify-around">
          <label htmlFor="Produit">Produit</label>
          <select
            id="Produit"
            className="border rounded px-3 py-1"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {myproducts.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-around mb-6">
          <label htmlFor="Quantity">Quantity</label>
          <input
            className="border border-black rounded-md py-1 px-2 outline-none"
            id="Quantity"
            type="number"
            placeholder="1"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button
          type="submit"
          className="bg-[#088178] text-white font-semibold py-2 w-[30%] mx-auto rounded-md cursor-pointer shadow-lg"
        >
          Buy now
        </button>
      </form>
    </section>
  );
}
