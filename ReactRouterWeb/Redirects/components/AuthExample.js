import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import Public from './Public';
import Protected from './Protected';
import Login from './Login';

const AuthExample = () => (
    <div>
        <AuthButton />
        <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/protected'>Protected Page</Link></li>
        </ul>

        <Switch>
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </Switch>
    </div>
)
export default AuthExample;