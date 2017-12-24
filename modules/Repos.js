import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export default class Repos extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Repos</h2>
                {/* add some links */}
                <ul>
                    <li><NavLink to="/repos/reactjs/router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                </ul>
                
                {/* Will render "Repo.js" when at /repos/:userName/:repoName */}
                {this.props.children}
            </div>
        );
    }
}