import * as actionTypes from './actionTypes';

export const initialState = {
    user: {},
    isLogged: false,
    theme: {
        background: 'dark',
        varient: 'dark'
    },
    posts: [],
    fullPost: {
        post: {},
        comments: []
    },
    isLoading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.AUTH_SUCCESS:
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
        case actionTypes.FETCH_POSTS_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                posts: action.posts
            }
        }
        case actionTypes.FETCH_POSTS_FAILUR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
        case actionTypes.FETCH_FULL_POST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_FULL_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                fullPost: {
                    post: action.post,
                    comments: action.comments
                }
            }
        }
        case actionTypes.FETCH_FULL_POST_FAILUR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;