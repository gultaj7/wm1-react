import { useState } from "react"

export default function App() {
  const [newItem, addNewItem] = useState("")
  const [todo, addTodo] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodo => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    }


  return (
    <>
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form">
          <label htmlFor="item">insert new item</label>
          <input 
            value={newItem} 
            onChange={e => addNewItem(e.target.value)}
            type="text" 
            id="item"
          />
        </div>
        <button className="button">add</button>
      </form>
      <h1 className="header">To do list</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </>
  )
  

}