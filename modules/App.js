import React from 'react';
import NavLink from './NavLink';
import Home from './Home';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>React Router Introduction</h1>
                <ul role="nav">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                {/* Renders children if any in "App" component and if not render "Home" component */}
                {this.props.children || <Home />}
            </div>
        );
    }
}