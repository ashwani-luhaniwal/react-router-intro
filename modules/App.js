import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; // Router component from React
import About from './About';
import Repos from './Repos';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h1>React Router Introduction</h1>
                        <ul role="nav">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/repos">Repos</Link></li>
                        </ul>
                        <hr />

                        <Switch>
                            <Route path="/repos" component={Repos} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}