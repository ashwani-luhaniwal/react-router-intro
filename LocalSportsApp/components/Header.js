/**
 * Header component creates links that cane be used to navigate between routes.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)
export default Header

/*export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/roster'>Roster</Link></li>
                        <li><Link to='/schedule'>Schedule</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}*/