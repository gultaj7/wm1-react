export default function App() {
  return (
    <>
      <form className="item-form">
        <div className="form">
          <label htmlFor="item">insert new item</label>
          <input type="text" id="item"/>
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