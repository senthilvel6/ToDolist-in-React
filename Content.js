import React from "react";
import Listitems from "./Listitems";


const Content=({items,handleCheck,handleDel})=>{
   

    return(
        <div>
            {items.length?(
        
            <Listitems
            items={items}
            handleCheck={handleCheck}
            handleDel={handleDel}
            />
           
           ):<p>Your list is empty</p>}
        </div>
    )
}
export default Content;