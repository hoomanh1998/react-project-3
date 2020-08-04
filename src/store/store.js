import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';

export const Store = createContext();

const thunk = dispatch => action => {
  if (typeof action === 'function')
    //this will pass dispatch function as an argument to the action function in actions.js and it will dispatch another actions inside that action function.
    return action(dispatch)
  //this will dispatch an action with regular action with type & payload.
  return dispatch(action)
}

const useThunk = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, thunk(dispatch)]
}

const Provider = (({ children }) => {
  const [state, dispatch] = useThunk(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
})

export default Provider;