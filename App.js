import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";
import SearchItems from './SearchItems';

function App() {
  const [items,setItems] =useState(JSON.parse(localStorage.getItem("todo_list")))
const [newItem,SetNewItem]=useState('')
const [search,setSearch]=useState('')
const addItems=(item)=>{
  const id=items.length ? items[items.length-1].id+1 : 1;
  const new_item={id, check:false,text:item}
  console.log(new_item)
  const list=[...items,new_item]
  setItems(list)
  localStorage.setItem("todo_list",JSON.stringify(list))
}

const handleAdd=(e)=>{
  e.preventDefault()
  if(!newItem) return
  addItems(newItem)
  SetNewItem('')

}

const handleCheck=(id)=>{
    const listItems=items.map((item)=>
        item.id===id ? {...item,check:!item.check}:item

    )
     setItems(listItems)
     localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleDel=(id)=>{
    const listItems=items.filter((item)=>
        item.id!==id
    )
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}
  return (
    <main>
      <Header/>
      <AddItem
      newItem={newItem}
      SetNewItem={SetNewItem}
      handleAdd={handleAdd}
      />
      <SearchItems
      search={search}
      setSearch={setSearch}
      />
      <Content
      items={items.filter((item)=>((item.text).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDel={handleDel}
      />
      <Footer
      length={items.length}
      />
    </main>
  );
}

export default App;
