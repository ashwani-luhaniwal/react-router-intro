import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; // Router component from React
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';

ReactDOM.render(
    (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
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