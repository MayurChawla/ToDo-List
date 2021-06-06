import {useState, useEffect} from 'react';
import { db } from './fb_config';
import firebase from 'firebase';
import TodoNote from './TodoNote';

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [getTodos, setTodos] = useState([]);
  useEffect(() => {
    getTodosFromDB();
  }, []);

  function getTodosFromDB() {
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo
        }))
      );
    });
  }
  
  function TodoAddFunction(e) {
    e.preventDefault();
    db.collection("todos").add({
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    });

    setTodoInput("");
    document.getElementById("myAnchor").focus();
  }
  
  return (
    <div className="App">
      <div className="h1-site-title"><h1>To-Do List</h1></div>
      <form onSubmit={TodoAddFunction}>
        <input autoFocus id="myAnchor" className="todo-inputarea" 
          value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}
          placeholder="Input text to add to list"></input>
        <button type="submit" className="todo-addbutton">Add Item</button>
        <p>{todoInput}</p>
      </form>
      {
        getTodos.map((todo)=> (
          <TodoNote todo ={todo.todo} id={todo.id} />
        ))
      }
    </div>
  );
}

export default App;
