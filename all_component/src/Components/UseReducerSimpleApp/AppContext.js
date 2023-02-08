import React, { createContext, useReducer } from "react";

export const actions = {
  LOADING: "...loading",
  SUCESS: "success",
  ERROR: "...error",
};
const initialState = {
  status: null,
  userData: [],
};

const reducer = (action, state) => {
  switch (action.type) {
    case action.LOADING:
      return {
        ...state,
        status:action.LOADING

      };
    case action.SUCESS:
      return {
    ...state,
    status: action.SUCESS

      };
    case action.ERROR:
      return {
        ...state,
        status: action.ERROR
      };
    default:
      return state;
  }
};

export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

