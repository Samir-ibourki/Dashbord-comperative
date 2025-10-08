

export default function Commande(){
return(
    <section className="mb-8"> 
        <h1 className="text-[1.7rem] mb-4 font-somibold ">New Commande</h1>
        <main className="bg-[#eee] py-7 w-[20%] flex flex-col gap-[1.3rem] shadow-xl ">
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

</div>
<div className="flex justify-around">
    <label htmlFor="Quantity">Quantity</label>
    <input className="border border-[black] rounded-md border-solid  py-1 px-2 outline-none" type="number" value={1} />
</div>
<button className="bg-[#088178] text-white font-semibold py-2 w-[30%] mx-auto rounded-md cursor-pointer shadow-lg ">Add To Cart</button>
        </main>
    </section>
)
}