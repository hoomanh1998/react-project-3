import React from "react";
import Layout from "./hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Provider from './store/store';
import Posts from "./containers/Post/Posts";
import FullPost from "./containers/Post/FullPost";
import Login from "./containers/Auth/Login";
import SignUp from "./containers/Auth/SignUp";
import Logout from './containers/Auth/Logout';
import PrivateRoute from './hoc/PrivateRoute';
import Home from "./containers/Home";

const App = () => {

  return (
    <Provider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/posts/:id" component={FullPost} />
          <PrivateRoute path="/posts" component={Posts} />
        </Switch>
      </Layout>
    </Provider>
  );
};

export default App;
