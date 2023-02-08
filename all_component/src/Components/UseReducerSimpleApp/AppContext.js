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
      return {};
    case action.SUCESS:
      return {};
    case action.ERROR:
      return {};
    default:
      return state;
  }
};

export const AppContextProvider = createContext();
function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
