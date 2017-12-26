/**
 * ---------------
 * Route and Link
 * ---------------
 * <Route> component is most important component in React router. It renders some UI
 * if the current location matches the route's path. Ideally, <Route> component
 * should have a prop named "path", and if the pathname is matched with current
 * location, it gets rendered.
 * 
 * <Link> component is used to navigate between pages. It's comparable to HTML anchor
 * element. However, using anchor links would result in browser refresh, which we
 * don't want. So instead, we can use <Link> to navigate to particular URL and have
 * the view re-rendered without a browser refresh.
 * 
 * ---------------
 * Route in Depth
 * ---------------
 * <Route> has 3 props that you can use to define what gets rendered: -
 *  - component: When URL is matched, the router creates a React element from the 
 *               given component using React.createElement
 *  - render: This is handy for inline rendering. The render prop expects a function
 *            that returns an element when the location matches the route's path.
 *  - children: The children prop is similar to render in that it expects a function 
 *              that returns a React element. However, children gets rendered 
 *              regardless of whether the path is matched with location or not.
 * 
 * ---------------
 * Path and match
 * ---------------
 * "path" is used to identify the portion of URL that the router should match. It uses
 * the Path-to-RegExp library to turn a path string into a regular expression. It will
 * then be matched against current location.
 * 
 * If the router's path and location are successfully matched, an object is created and
 * we call it the "match" object. The match object carries more information about the 
 * URL and the path. 
 * - match.url : A string that returns the matched portion of URL. This is particularly
 *               useful for building nested <Link>s.
 * - match.path : A string that returns route's path string - that is, <Route path="">.
 *                We'll be using this to build nested <Route>s.
 * - match.isExact : A boolean that returns true if the match was exact (without any trailing characters)
 * - match.params : An object containing key/value pairs from URL parsed by Path-to-RegExp package.
 * 
 * -----------------
 * Switch Component
 * -----------------
 * When multiple <Route>s are used together, all the routes that match are rendered inclusively.
 * With <Switch>, only the first child <Route> that matches the location gets rendered.
 * 
 * ---------
 * Redirect
 * ---------
 * Like server-side redirects, <Redirect> will replace the current location in the history stack with
 * new location. The new location is specified by the "to" prop.
 *      <Redirect to={{pathname: '/login', state: {from: props.location}}}
 * If someone tries to access the /admin while logged out, they'll be redirected to /login route.
 * The information about current location is passed via state, so that if the authentication is
 * successful, the user can be redirected back to original location. Inside child component, you can
 * access this information at "this.props.location.state"
 * 
 * --------------
 * Custom Routes
 * --------------
 * A custom route is a fancy word for route nested inside a component. If we need to make a decision
 * whether a route should be rendered or not, writing a custom route is the way to go.
 */

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import { fakeAuth } from './fakeAuth';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Homes</Link></li>
                        <li><Link to='/category'>Category</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                    </ul>
                </nav>

                {/* 
                    Route components are rendered if the path prop matches the current URL.
                    If you want a route to be rendered only if the paths are exactly same,
                    you should use the exact props.
                */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/category' component={Category} />
                    <Route path='/login' component={Login} />
                    {/* fakeAuth.isAuthenticated returns true if the user is logged in and false otherwise */}
                    <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component={Products} />
                </Switch>

            </div>
        );
    }
}