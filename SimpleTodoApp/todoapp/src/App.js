import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

export default function Todo() {
  const [text, SetText] = useState("");
  const [Todo, SetTodo] = useState([]);
  const [editid, SetEditID] = useState(0);

  const handleChange = (e) => {
    SetText(e.target.value);
  };

  const HandleClick = () => {
    // edit function
    if (editid) {
      const EditTodo = Todo.find((el) => el.id === editid);
      const UpdateTodo = Todo.map((t) =>
        t.id === EditTodo.id
          ? (t = { id: t.id, text })
          : { id: t.id, text: t.text }
      );
      SetTodo(UpdateTodo)
      SetEditID(0)
      SetText("")
      return;
    }

    if (text !== "") {
      SetTodo([{ id: `${text}-${Date.now}`, text }, ...Todo]);
      SetText("");
    }
  };
  // Delete function
  const HandleDelete = (id) => {
    const Del = Todo.filter((el) => el.id !== id);
    SetTodo(Del);
  };
  // Edit function....
  const HandleEdit = (id) => {
    const EditTodo = Todo.find((el) => el.id === id);
    SetText(EditTodo.text);
    SetEditID(id);
  };

  return (
    <>
      <div>
        <input onChange={handleChange} value={text} placeholder="enter task" />

        <button onClick={HandleClick}>{editid ? "Edit" : "Add"}</button>

        <ul>
          {Todo.map((t) => (
            <li key={t.id}>
              {t.text}
              <button onClick={() => HandleEdit(t.id)}>Edit</button>
              <button onClick={() => HandleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
