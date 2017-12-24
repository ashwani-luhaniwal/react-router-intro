import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from './Roster';
import Schedule from './Schedule';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    {/* 
                        "exact" prop is used to state that the route should only match when pathname 
                        matches the route's path exactly
                    */}
                    <Route exact path="/" component={Home} />
                    <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} />
                </Switch>
            </main>
        );
    }
}