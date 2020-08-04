import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        user
    }
};

export const authSuccess = () => {
    localStorage.setItem('user', JSON.stringify({
        isLogged: true
    }))
    return {
        type: actionTypes.AUTH_SUCCESS
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT
    }
};

export const changeTheme = () => {
    return {
        type: actionTypes.CHANGE_THEME
    }
};

export const fetchPosts = () => {
    return async dispatch => {
        dispatch({ type: 'FETCH_POSTS_STARTED' })
        const onSuccess = (posts) => {
            dispatch({ type: 'FETCH_POSTS_SUCCESS', posts });
        }
        const onError = (error) => {
            dispatch({ type: 'FETCH_POSTS_FAILURE', error });
        }
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return onSuccess(posts.data);
        } catch (error) {
            return onError(error);
        }
    }
}

export const fetchFullPost = (id) => {
    return async dispatch => {
        dispatch({ type: 'FETCH_FULL_POST_STARTED' })
        const onSuccess = (post, comments) => {
            dispatch({ type: 'FETCH_FULL_POST_SUCCESS', post, comments });
        }
        const onError = (error) => {
            dispatch({ type: 'FETCH_FULL_POST_FAILURE', payload: error });
        }
        try {
            const post =
                await axios.get(`https://jsonplaceholder.typicode.com${id}`);
            const comments =
                await axios.get(`https://jsonplaceholder.typicode.com${id}/comments`)
            return onSuccess(post.data, comments.data);
        } catch (error) {
            return onError(error);
        }
    }
}


