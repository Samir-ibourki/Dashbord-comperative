
import { useState } from "react";
import { useProductStore } from "../store/ProductStore";
//import products from '../data/products.json'
export default function ManageProducts() {
const { products, addProduct, deleteProduct,updateProduct} = useProductStore();
const [editedProduct, setEditedProduct] = useState(null);
 const handleEdit = (product) => {
    setEditedProduct(product);
  };

  const handleSave = () => {
    updateProduct(editedProduct.id, {
      name: editedProduct.name,
      price: editedProduct.price,
    });
    setEditedProduct(null); // fermer le mode édition
  };

return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestion des Produits</h1>

      {/* Formulaire d’ajout */}
      <form onSubmit={(e) => {
        e.preventDefault();
        const newProd = {
          id: Date.now(),
          name: e.target.name.value,
          price: e.target.price.value,
        };
        addProduct(newProd);
        e.target.reset();
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
              <td className="p-2 text-center">{p.name}</td>
              <td className="p-2 text-center">{p.price} MAD</td>
              <td className="p-2 text-center flex justify-center gap-2">
  <button
    onClick={() => handleEdit(p)}
    className="bg-blue-500 text-white px-3 rounded"
  >
    Modifier
  </button>
  <button
    onClick={() => deleteProduct(p.id)}
    className="bg-red-500 text-white px-3 rounded"
  >
    Supprimer
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
      {editedProduct && (
  <div className="mt-6 border-t pt-4">
    <h2 className="text-xl mb-3 font-semibold">Modifier le produit</h2>
    <div className="flex gap-3 items-center">
      <input
        type="text"
        value={editedProduct.name}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, name: e.target.value })
        }
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={editedProduct.price}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, price: +e.target.value })
        }
        className="border p-2 rounded w-24"
      />
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Enregistrer
      </button>
      <button
        onClick={() => setEditedProduct(null)}
        className="bg-gray-400 text-white px-4 py-2 rounded"
      >
        Annuler
      </button>
    </div>
  </div>
)}

    </section>
  );
}


























