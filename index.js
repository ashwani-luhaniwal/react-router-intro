import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; // Router component from React
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import Home from './modules/Home';

ReactDOM.render(
    (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={App} />
                    {/* 
                        add the Home component here, as a child of '/' 
                        "IndexRoute" has no path. It becomes "this.props.children" of parent when no 
                        other child of parent matches or when the parent's route matches exactly
                        React Router looks for an index route if a route's path matches exactly.

                        <IndexRoute component={Home} />
                    */}
                    <Route path="/about" component={About} />
                    {/* Nest the "Repo" route under "Repos" route. */}
                    <Route path="/repos" component={Repos}>
                        {/* parameter name in the route "path" becomes property name in component */}
                        <Route path="/repos/:userName/:repoName" component={Repo} />
                    </Route>
                </Switch>
            </div>
        </Router>
    ), 
    document.getElementById('app')
);