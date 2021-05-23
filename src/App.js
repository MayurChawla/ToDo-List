import './App.css';
import {useState} from 'react';

function App() {
  const [todoInput, setTodoInput] = useState("");
  function TodoAddFunction(e) {
    e.preventDefault();
    console.log("Added : " + todoInput);
    setTodoInput("");
    document.getElementById("myAnchor").focus();
  }
  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={TodoAddFunction}>
        <input autoFocus id="myAnchor" className="todo-inputarea" 
          value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}
          placeholder="Input text to add to list"></input>
        <button type="submit" className="todo-addbutton">Add Item</button>
        <p>{todoInput}</p>
      </form>
      
    </div>
  );
}

export default App;
