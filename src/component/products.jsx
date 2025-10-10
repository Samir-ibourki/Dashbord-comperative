import myproducts from '../data/products.json'

function CardsLists() {
  return (
    <section className="flex flex-wrap max-w-[90vw] mx-auto lg:justify-between gap-y-[2rem] mb-[4rem]">
      {myproducts.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </section>
  );
}

function Card(props) {
  const { image, price, name, category } = props;

  return (
    <div className="border-solid border-[0.1rem] rounded-[0.5rem] p-[0.8rem] shadow-md hover:shadow-xl hover:transition-all hover:ease-linear cursor-pointer w-[30%]">
      <span className="mx-[auto]">
        <img
          className="rounded-[0.5rem] mx-[auto] mb-[0.7rem]  w-[100%]"
          src={image}
          alt={name}
        />
      </span>
      <p className=" italic mb-[0.7rem] text-[#8a8484]">{category}</p>
      <h3 className="mb-[0.7rem] font-semibold text-[1.4rem]">{name}</h3>

      <aside className=" lg:flex mb-[0.6rem] lg:justify-between lg:items-center text-[#088178] ">
        <p className="prix italic font-bold">{price} MAD</p>
        <button className="bg-[#088178] hover:bg-[#cdd95f] hover:text-black hover:font-semibold hover:transition-all hover:ease-linear hover:duration-300 text-[white] px-[1rem] py-[0.3rem] rounded-[0.5rem] cursor-pointer">
          <a href="Checkout">Add to Cart</a>
        </button>
      </aside>
    </div>
  );
}

export default CardsLists;


 