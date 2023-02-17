import { INC, DEC } from "./counter.actiontype";

const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + action.payload,
      };
    }
    case DEC: {
      return {
        count: state.count - action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
