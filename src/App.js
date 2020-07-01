import React, { useState } from "react";

import Layout from "./hoc/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./containers/Posts";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import ThemeContext, { themes } from "./components/theme-context";

const App = () => {
  const toggleTheme = () => {
    setState(prevState => ({
      ...prevState,
      theme: prevState.theme === themes.dark ? themes.light : themes.dark
    }));
  };
  const [state, setState] = useState({
    theme: themes.light,
    toggleTheme
  });

  return (
    <ThemeContext.Provider value={state}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
