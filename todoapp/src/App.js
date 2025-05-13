import React, { useState, useEffect } from "react";
import db from "./firebase";
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() =>
    onSnapshot(collection(db, "todos"), snap =>
      setTodos(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    ), []);

  const addTodo = async () => {
    if (input.trim()) {
      await addDoc(collection(db, "todos"), { text: input, completed: false });
      setInput("");
    }
  };

  const handleUpdate = (id, data) => updateDoc(doc(db, "todos", id), data);
  const handleDelete = id => deleteDoc(doc(db, "todos", id));

  return (
    <div className="container">
      <h1>Firebase To-Do App</h1>
      <div className="input-section">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add a task..." />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? "completed" : ""}>
            <span onClick={() => handleUpdate(id, { completed: !completed })}>{text}</span>
            <button onClick={() => handleDelete(id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}