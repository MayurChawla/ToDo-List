import React from 'react';
import { db } from './fb_config';

function TodoNote({todo, id}) {
    function deleteTodo() {
        db.collection("todos").doc(id).delete();
    }
    return(
        <div className="todo-note">
                <span className="todo-span">{todo}</span>
                <button onClick={deleteTodo} className="todo-del-btn">x</button>
        </div>
    );
}

export default TodoNote;