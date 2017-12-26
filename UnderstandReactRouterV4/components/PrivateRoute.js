/**
 * The route renders the Admin component if the user is logged in. Otherwise, the user
 * is redirected to /login. The good thing about this approach is that it is evidently
 * more declarative and PrivateRoute is reusable.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ (props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } />
    )
}
export default PrivateRoute;