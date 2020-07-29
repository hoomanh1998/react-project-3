import * as actionTypes from './actionTypes';

export const initialState = {
    user: {},
    isLogged: false,
    theme: {
        background: 'dark',
        varient: 'dark'
    },
    posts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.AUTH:
            return {
                ...state,
                isLogged: true
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: {},
                isLogged: false,
                theme: {
                    background: 'dark',
                    varient: 'dark'
                }
            }
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: {
                    ...state.theme,
                    background:
                        state.theme.background === 'dark' ? 'primary' : 'dark'
                }
            }
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: [
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default reducer;