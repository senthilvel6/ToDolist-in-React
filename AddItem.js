import React from "react";

const AddItem=({newItem,SetNewItem,handleAdd})=>{
   return(
    <form className="addForm" onSubmit={handleAdd}>
        <label htmlFor="addItem">Add</label>
        <input
        type="text"
        placeholder="Add Item"
        required
        id="addItem"
        value={newItem}
        onChange={(e)=>SetNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
        
        
    </form>
   )
}

export default AddItem