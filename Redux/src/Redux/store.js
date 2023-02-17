import {legacy_createStore } from "redux";

import {reducer} from "./Counter/counter.reducer";

export const store=legacy_createStore(reducer);