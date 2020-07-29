import React, { useReducer, createContext, useContext } from 'react';
import reducer, { initialState } from './reducer';

const Store = createContext();

const Provider = (({ children }) => {
    let store = {}
    const [state, dispatch] = useReducer(reducer, initialState);
    store = { state, dispatch }
    return <Store.Provider value={store}>{children}</Store.Provider>
})

const connect = (
    mapStateToProps = () => { },
    mapDispatchToProps = () => { }
) => WrappedComponent => {
    return () => {
        const { state, dispatch } = useContext(Store)
        return (
            <WrappedComponent
                dispatch={dispatch}
                {...mapStateToProps(state)}
                {...mapDispatchToProps(dispatch)}
            />
        )
    }
}

export { Store, Provider, connect }