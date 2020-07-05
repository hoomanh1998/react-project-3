import { createContext } from "react";

export const UserContext = createContext({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isLogged: 'false',
    saveUserData: () => { },
    logoutHandler: () => { },
    toggleLoginLogout: () => { }
});

export default UserContext;