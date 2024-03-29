import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { dataReducer } from "./Fetch/fetch.reducer";
import { reducer } from "./Counter/counter.reducer";
import {todoReducer} from "./Crud/todo.reducer";
import thunk from "redux-thunk";
// MiddleWare

const rootReducer = combineReducers({
  data: dataReducer,
  count: reducer,
  todo:todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
