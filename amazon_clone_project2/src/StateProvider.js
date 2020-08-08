// setup data layer
// We need track the cart

import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside component
export const useStateValue = () => useContext(StateContext);
