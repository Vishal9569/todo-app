import Title from './Component store/Title'
import './App.css'
import Todoheader from './Component store/Todoheader'
import { useState } from 'react'
import Itemlist from './Component store/itemlist'
import Message from './Component store/message'

function App() {

  const [items, setNewItem] = useState([]);

  const handleitemAdd = (itemName, itemDate) => {
    const newItemAdd = { itemName, itemDate };
    setNewItem([...items, newItemAdd]);
  }

  const handleDeleteItem = (itemNametoDelete) => {
    const newSortItem = items.filter(item => item.itemName !== itemNametoDelete);
    setNewItem(newSortItem);
  }

  return (
    <>

      <Title />
      <Todoheader handleitemAdd={handleitemAdd} />
      {items.length === 0 ? <Message /> :
        <Itemlist items={items} handleDeleteItem={handleDeleteItem} />}
    </>
  )
}

export default App
