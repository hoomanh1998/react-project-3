export const initialState = {
    user: {},
    isLogged: false,
    theme: {
        background: 'dark',
        varient: 'dark'
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_USER":
            return {
                ...state,
                user: action.payload
            }
        case "AUTH":
            return {
                ...state,
                isLogged: true
            }
        case "LOGOUT":
            localStorage.removeItem('user');
            return state
        case "CHANGE_THEME":
            return {
                ...state,
                theme: {
                    ...state.theme,
                    background:
                        state.theme.background === 'dark' ? 'primary' : 'dark'
                }
            }
        default:
            return state
    }
}

export default reducer;