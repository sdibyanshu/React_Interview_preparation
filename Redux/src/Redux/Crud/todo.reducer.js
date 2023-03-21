import * as types from "./todo.actiontype";

const initState = {
  isLoading: false,
  isError: false,
  todo: [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case types.GET_LOADING_TODO: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_ERROR_TODO: {
      return {
        ...state,
        isLoading: false,
        todo: [],
        isError: true,
      };
    }
    case types.CREATE_TODO: {
      return {
        ...state,
        isLoading: false,
        todo: [...state.todo, action.payload],
      };
    }
    case types.UPDATE_TODO: {
      return {
        ...state,
        isLoading: false,
        todo: state.todo.map((el) =>
          el.id === action.payload.el.id ? action.payload.el : el
        ),
      };
    }
    case types.DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload.todoID),
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
