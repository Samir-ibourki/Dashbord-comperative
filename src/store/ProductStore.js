import { create } from 'zustand';
import products from '../data/products.json'
export const useProductStore = create((set) => ({
  products: products,

  addProduct: (newProduct) => set((state) => ({
    products: [...state.products, newProduct]
  })),

  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(p => p.id !== id)
  })),

  updateProduct: (id, updatedData) => set((state) => ({
    products: state.products.map(p =>
      p.id === id ? { ...p, ...updatedData } : p
    )
  })),
}));
