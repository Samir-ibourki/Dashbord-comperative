
 
export default function SideBar() {
 const categorys = ['Huile', 'Miel', 'Graines'];

  return (
    <>
      <div className=" p-2 w-[100%]">
        <h2 className="text-2xl mb-3 font-semibold ">Filters</h2>
        <h3 className="text-2xl mb-4">Category :</h3>
        <div id="filters-container" className="text-xl space-y-3">
          {categorys.map((category) => {
            
            return (
              <div className="space-x-2">
                <input type="checkbox" value={category} />
                <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}




