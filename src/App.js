import React, { useState } from "react";

import Layout from "./hoc/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./containers/Posts";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import ThemeContext, { themes } from "./containers/Context/theme-context";
import UserContext from './containers/Context/auth-context';

const App = () => {

  const toggleTheme = () => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === themes.dark ? themes.blue : themes.dark
    }));
  };

  const [state, setState] = useState({
    theme: themes.dark,
    toggleTheme
  });

  const [isLogged, setIsLogged] = useState('false')
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const saveUserData = (userData) => {
    setUser({
      ...user,
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password
    })
  }

  const logoutHandler = () => {
    localStorage.removeItem('user');
    alert('Successfully logout');
  };

  const toggleLoginLogout = () => {
    setIsLogged(isLogged === 'true' ? 'false' : 'true')
  }

  return (
    <ThemeContext.Provider value={state}>
      <UserContext.Provider value={{
        isLogged,
        user,
        toggleLoginLogout,
        saveUserData,
        logoutHandler
      }}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
