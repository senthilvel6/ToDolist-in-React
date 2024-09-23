import React from "react";

const SearchItems=({search,setSearch})=>{
    return(
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label
            htmlFor="search"
            ></label>
            <input
              type="text"
              id="search"
              role="searchbox"
              placeholder="Search items"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItems