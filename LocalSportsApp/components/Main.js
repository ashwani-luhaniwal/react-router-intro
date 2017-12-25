/**
 * Main component renders one of three provided Routes (provided that one matches).
 * Both the roster and /schedule routes will match any pathname that starts with
 * /roster or /schedule. The / route will only match when the pathname is exactly
 * the string "/"
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from './Roster';
import Schedule from './Schedule';
import Home from './Home';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)
export default Main;

/*export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    {/* 
                        "exact" prop is used to state that the route should only match when pathname 
                        matches the route's path exactly
                    */ /*}
                    <Route exact path="/" component={Home} />
                    <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} />
                </Switch>
            </main>
        );
    }
}*/