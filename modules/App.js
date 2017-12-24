import React from 'react';
import NavLink from './NavLink';

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
                {this.props.children}
            </div>
        );
    }
}