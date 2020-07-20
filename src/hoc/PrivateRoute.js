import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    let isLogged = null;
    if (JSON.parse(localStorage.getItem('user'))) {
        isLogged = JSON.parse(localStorage.getItem('user')).isLogged;
    }
    return (
        <Route exact {...rest} render={(props) => (
            isLogged === true
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    );
}

export default PrivateRoute;