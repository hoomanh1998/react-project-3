import * as actionTypes from './actionTypes';

export const saveUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        payload: user
    }
};

export const auth = () => {
    localStorage.setItem('user', JSON.stringify({
        isLogged: true
    }))
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

