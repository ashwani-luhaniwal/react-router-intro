import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './Player';

export default class Roster extends React.Component {
    render() {
        return (
            {/*
                It is useful to group routes that shares a common prefix in same component. This 
                allows for simpler parent routes and gives us a place to render content which is
                common across all routes with the same prefix.

                <Roster> could render a title which would be displayed for all routes whose path
                begins with /roster.

                The :number part of path /roster/:number means part of pathname that comes after 
                /roster/ will be captured and stored as "match.params.number". 
            */}
            <div>This is Roster page.</div>
            <Switch>
                <Route exact path='/roster' component={Roster} />
                <Route path='/roster/:number' component={Player} />
            </Switch>
        );
    }
}