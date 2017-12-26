import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import fakeAuth from './fakeAuth';

// In order to pass ...rest in component, you must install babel-plugins such as
// "transform-es2015-destructuring" and "transform-object-rest-spread"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

            <Route {...rest} render={ props => (
                    fakeAuth.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
                    )
                )} />

    )
}
export default PrivateRoute;