import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Title from './Title';
import List from './List';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Title} />
                    <Route path='/list' component={List} />
                </Switch>
            </div>
        );
    }
}