import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; // Router component from React
import About from './modules/About';
import Repos from './modules/Repos';
import App from './modules/App';
import Repo from './modules/Repo';

ReactDOM.render(
    (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/repos" component={Repos} />
                    <Route path="/repos/:userName/:repoName" component={Repo} />
                </Switch>
            </div>
        </Router>
    ), 
    document.getElementById('app')
);