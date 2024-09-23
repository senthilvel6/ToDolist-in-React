import React from "react";
import Lineitems from "./Lineitem";

const Listitems=({items,handleCheck,handleDel})=>{
    
return(
    <ul> 
    {items.map((item)=>(
       <Lineitems
       
       item={item}
       text={item.text}
       key={item.id}
       handleCheck={handleCheck}
       handleDel={handleDel}
       />
        )

    )}
    </ul>
)
}

export default Listitems