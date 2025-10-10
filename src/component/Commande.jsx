
import myproducts from '../data/products.json'
export default function Commande(){
   
return(
    <section className="mb-8 w-[50%] mx-auto">
        
        <main className="bg-[#eee] py-7 flex flex-col gap-[1.3rem] shadow-xl ">
<div className="flex justify-around">
    <label htmlFor="Name">FullName</label>
    <input className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none" type="text" />
</div>
<div className="flex justify-around">
    <label htmlFor="Telephone">Telephone</label>
    <input className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none" type="text" />
</div>
<div className="flex justify-around">
    <label htmlFor="Produit">Produit</label>
 <select id="statusFilter" class="border rounded px-3 py-1">
  {myproducts.map((product)=>{
  return( <option className='outline-none bordre-none' value={product.name}>{product.name}</option>)
  })}
    
  </select>
</div>
<div className="flex justify-around mb-6">
    <label htmlFor="Quantity">Quantity</label>
    <input className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none" type="number" placeholder="1" min={0} />
</div>
<button className="bg-[#088178] text-white font-semibold py-2 w-[30%] mx-auto rounded-md cursor-pointer shadow-lg ">Buy now</button>
        </main>
    </section>
)
}