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


  if (isLoading) {
    return <>...loading</>;
  }
  if (isError) {
    return <>...Error</>;
  }

  return (
    <>
      {todo.map((el) => (
        <div>
          <p key={el.id}></p>
          <p>{el.name}</p>
        </div>
      ))}
    </>
  );
}

export default Todo;
