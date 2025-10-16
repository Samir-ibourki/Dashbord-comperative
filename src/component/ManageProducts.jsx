import { useProductStore } from "../store/ProductStore";

export default function ManageProducts() {
  const { products, addProduct, deleteProduct } = useProductStore();

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestion des Produits</h1>

      {/* Formulaire d’ajout */}
      <form onSubmit={(e) => {
        e.preventDefault();
       
        
      }} className="flex gap-3 mb-6">
        <input name="name" placeholder="Nom produit" className="border p-2 rounded" />
        <input name="price" placeholder="Prix (MAD)" type="number" className="border p-2 rounded" />
        <button className="bg-green-600 text-white px-4 rounded">Ajouter</button>
      </form>

      {/* Liste des produits */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Nom</th>
            <th className="p-2">Prix</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.price} MAD</td>
              <td className="p-2 text-center">
                <button
                 
                  className="bg-red-500 text-white px-3 rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}


























