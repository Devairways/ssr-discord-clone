import React, { createContext, useReducer } from "react";

const initialState = { authed: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("new state entry: ", action.type, action.payload)
    switch(action.type) {
      case "userLogin":
        const newState = Object.assign({},state, {data:action.payload, authed:true})
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }