import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import fakeAuth from './fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Switch>
            <Route {...rest} render={ (props) => {
                return (
                    fakeAuth.isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
                    )
                )
            }} />
        </Switch>
    )
}
export default PrivateRoute;