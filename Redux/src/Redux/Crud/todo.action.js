import axios from "axios";
import * as types from "./todo.actiontype";

console.log(types.GET_ERROR_TODO);
export const getTodo = () => async (dispatch) => {
  dispatch({ type: types.GET_LOADING_TODO });
  try {
    const res = await axios.get(
      "https://mock-json-server-unwy.onrender.com/todo"
    );
    dispatch({ type: types.GET_TODO, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_ERROR_TODO });
  }
};
export const createTodo = (todo) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mock-json-server-unwy.onrender.com/todo",
      todo
    );
    dispatch({ type: types.CREATE_TODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://mock-json-server-unwy.onrender.com/todo/${id}`,
      todo
    );
    dispatch({ type: types.UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://mock-json-server-unwy.onrender.com/todo/${id}`
    );
    dispatch({ type: types.DELETE_TODO, payload: id });
  } catch (error) {
    console.log(error);
  }
};
