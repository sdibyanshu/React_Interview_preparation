import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../Redux/Crud/todo.action";

function Todo() {
  const { todo, isLoading, isError } = useSelector((store) => store.todo);
  const [info, setinfo] = useState("");
  const dispatch = useDispatch();
  
  // READ REQUEST 
  // For showing Fetched Data from APi
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  
  // DELETE REQUEST 
  // For deleting particular item 
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  
  // For adding new todo in api input box
  const handlechange = (e) => {
    const { name, value } = e.target;
    setinfo({
      ...info,
      [name]: value,
    });
  };
  
  // POST REQUEST 
  const senddata = () => {
    dispatch(createTodo(info));
  };

  const handleupdate=()=>{

  }

  if (isLoading) {
    return <>...loading</>;
  }
  if (isError) {
    return <>...Error</>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Post todo here"
        onChange={(e) => handlechange(e)}
        name="name"
      />
      <button onClick={senddata}>Post</button>

      {todo.map((el) => (
        <div key={el.id} style={{ display: "flex", justifyContent: "center" }}>
          <p>{el.name}</p>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
          <button onClick={() => handleupdate(el.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
