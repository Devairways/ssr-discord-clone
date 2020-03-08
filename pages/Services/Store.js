import React, {createContext, useReducer} from 'react';

const initialState = {init:"initialllllllyyyyy"};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("aasasa state", action.type, action.payload)
    switch(action.type) {
      case 'userLogin':
        const newState = Object.assign({},{data:action.payload})
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }