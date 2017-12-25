import React from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

const BasicExample = () => (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
        </ul>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
        </Switch>
    </div>
)
export default BasicExample;