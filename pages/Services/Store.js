import React, { createContext, useReducer } from "react";

const initialState = { authed: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case "userLogin":
        return Object.assign({}, state, { data:action.payload, authed:true });
        case "userUpdate":
        return Object.assign({}, state, { data:action.payload, authed:true });
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }