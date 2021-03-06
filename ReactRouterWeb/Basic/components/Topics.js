import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Topic from './Topic';

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            {/* Create routes based on url match */}
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${match.url}/components`}>Components</Link></li>
            <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
        </ul>

        <Switch>
            {/* Redering above mentioned links using Topic component */}
            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )} />
        </Switch>
    </div>
)
export default Topics;