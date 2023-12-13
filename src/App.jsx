import { useState } from "react"

export default function App() {
  const [newItem, addNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
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
        {todos.map(todo => {
          return (
            <li key={todo.id}>
          <label htmlFor="">
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </label>
          <button className="delete">Delete</button>
        </li>
          )
        })}
        
      </ul>
    </>
  )
  

}