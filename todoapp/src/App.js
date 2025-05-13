// src/App.js
import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Fetch todos in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  // Add Todo
  const addTodo = async () => {
    if (input.trim() === "") return;
    await addDoc(collection(db, "todos"), { text: input, completed: false });
    setInput("");
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  // Toggle completion
  const toggleComplete = async (id, completed) => {
    await updateDoc(doc(db, "todos", id), { completed: !completed });
  };

  return (
    <div className="container">
      <h1>Firebase To-Do App</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(todo.id, todo.completed)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
