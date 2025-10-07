import products from '../data/products.json'

function Products() {
  return (
    
    <div className=' flex flex-wrap max-w-[90vw] mx-auto justify-between gap-[2rem]'>

    
   {  products.map((product) => ( 
        <div class="border-solid border-[0.1rem] rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:transition-all hover:ease-linear cursor-pointer w-[30%]">
          <span>
            <img class="rounded-2xl mb-[0.7rem]" src={product.image} alt={product.name} />
          </span>
          <p class="ad italic mb-[0.7rem] text-[#8a8484]">{product.category}</p>
          <h3>{product.name}</h3>
          
          <aside class="cart-shop flex justify-between text-[#088178] ">
            <p class="prix italic font-bold">{product.price}</p>
         <button className="bg-black text-white px-3 py-1 mt-2 rounded">Add to Cart</button>

        </aside>
        </div>
    ))}
   </div>
    
  )
}

export default Products;

















