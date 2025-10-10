import { useContext } from "react";
import { OrdersContext } from "../content/OrdersContext.jsx";

export default function OrderList() {
  const { orders } = useContext(OrdersContext);

  return (
    <section className="max-w-[90vw] mx-auto mb-[3rem]">
      <h1 className="text-[1.7rem] mb-8 font-semibold text-center">
        Liste Des Commandes
      </h1>
      <table className="min-w-full border border-gray-300 bg-white rounded-xl overflow-hidden shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-4 border-b">Client</th>
            <th className="text-left py-2 px-4 border-b">Produits</th>
            <th className="text-left py-2 px-4 border-b">Total</th>
            <th className="text-left py-2 px-4 border-b">Statut</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition">
              <td className="py-2 px-4 border-b">{order.client}</td>
              <td className="py-2 px-4 border-b">
                {order.products.map((p) => (
                  <div key={p.name}>
                    {p.name} × {p.quantity}
                  </div>
                ))}
              </td>
              <td className="py-2 px-4 border-b font-semibold">
                {order.total} MAD
              </td>
              <td className="py-2 px-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
