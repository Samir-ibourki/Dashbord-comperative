import { create } from 'zustand';
import products from '../data/products.json'
export const useProductStore = create((set) => ({
  products: [products],
addProduct:(product)=>set((state)=>({

}))
  
}));

