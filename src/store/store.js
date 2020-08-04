import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from './reducer';

export const Store = createContext();

const applyThunk = dispatch => action => {
  if (typeof action === 'function')
    return action(dispatch)
  return dispatch(action)
}

const useThunkReact = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, applyThunk(dispatch)]
}

const Provider = (({ children }) => {
  const [state, dispatch] = useThunkReact(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
})

export default Provider;