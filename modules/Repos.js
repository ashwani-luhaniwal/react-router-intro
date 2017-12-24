import React from 'react';
import { Link } from 'react-router-dom';

export default class Repos extends React.Component {
    render() {
        return (
            <div>
                <h2>Repos</h2>
                {/* add some links */}
                <ul>
                    <li><Link to="/repos/reactjs/router">React Router DOM</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
            </div>
        );
    }
}