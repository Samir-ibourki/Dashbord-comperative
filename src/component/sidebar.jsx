
export default function SideBar() {
    return (
        <>

<div className=" p-2 w-full">
        <h2 class="text-2xl mb-3 font-semibold ">Filters</h2>
        <h3 class="text-2xl mb-4">Category :</h3>
        <div id="filters-container" className="text-xl space-y-3">
          <div className="space-x-2">
            <input type="checkbox" className="check" id="huile" />
            <label for="huile">Huile</label>
          </div>
          <div className="space-x-2">
            <input type="checkbox" className="check" id="miel" />
            <label for="miel">Miel</label>
          </div>
          <div className="space-x-2">
            <input type="checkbox" className="check" id="graines" />
            <label for="graines">Graines</label>
          </div>
        </div>
      </div>
       
        </>


    )
}








