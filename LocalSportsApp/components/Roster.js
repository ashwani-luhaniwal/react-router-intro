/**
 * The Roster component matches one of two different routes depending on the full pathname
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './Player';
import FullRoster from './FullRoster';
import { debug } from 'util';

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
            <div>
                <h2>This is Roster Page</h2>
                <Switch>
                    <Route exact path='/roster' component={FullRoster} />
                    <Route path='/roster/:number' component={Player} />
                </Switch>
            </div>
        );
    }
}