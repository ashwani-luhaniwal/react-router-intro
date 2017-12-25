/**
 * FullRoster iterates over all of the players and creates a link to 
 * their profile page.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from './PlayerAPI';

const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)
export default FullRoster

/*export default class FullRoster extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.all.map(p => (
                            <li key={p.number}>
                                <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}*/