import React from "react";

const Lineitems=({item,text,handleCheck,handleDel})=>{
   
    return(
        <li className="item">
        <input
        type="checkbox"
        checked={item.check}
        onChange={()=>handleCheck(item.id)}
        />
        <label style={(item.check)?
            {textDecoration:'line-through'}:null}
             onDoubleClick={()=>handleCheck(item.id)}>
                {text}
        </label>
        <button onClick={()=>handleDel(item.id)}>Del</button>
    </li>
    )

}

export default Lineitems