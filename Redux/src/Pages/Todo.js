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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleDelete=(id)=>{
dispatch(deleteTodo(id));
  }

  if (isLoading) {
    return <>...loading</>;
  }
  if (isError) {
    return <>...Error</>;
  }

  return (
    <>
     
     
     
     
      {todo.map((el) => (
        <div key={el.id} style={{display:"flex",justifyContent:"center"}}>
          <p>{el.name}</p>
          <button onClick={()=>handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
