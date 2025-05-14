import { useState, useEffect } from "react";
import { db} from "./firebase";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

export default function App() {
  const [todos, setTodos] = useState([]), 
  [text, setText] = useState("");

  useEffect(() => onSnapshot(collection(db, "todos"), snap =>
    setTodos(snap.docs.map(d => ({ id: d.id, ...d.data() })))), []);

  const add = () => text && addDoc(collection(db, "todos"), { text, completed: false }).then(() => setText(""));
  const toggle = (id, done) => updateDoc(doc(db, "todos", id), { completed: !done });
  const del = id => deleteDoc(doc(db, "todos", id));

  return (
    <div>
      <h1>Todo</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id} style={{ cursor: "pointer", textDecoration: t.completed ? "line-through" : "" }}>
            <span onClick={() => toggle(t.id, t.completed)}>{t.text}</span>
            <button onClick={() => del(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
