import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        payload: user
    }
};

export const auth = () => {
    return {
        type: actionTypes.AUTH,
        payload: null
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT,
        payload: null
    }
};

export const changeTheme = () => {
    return {
        type: actionTypes.CHANGE_THEME,
        payload: null
    }
};

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        payload: posts
    };
};

export const fetchPosts = () => async (dispatch) => {
    try {
        const result = await axios('https://jsonplaceholder.typicode.com/posts');
        dispatch(setPosts(result.data));
    } catch (error) {
        console.log(error)
    }
}

