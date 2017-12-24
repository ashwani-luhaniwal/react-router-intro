import React from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends React.Component {
    render() {
        // Spread (...) operator here, clones our props and in this use case it clones activeClassName
        // to our desired component for us. 
        return (
            <Link {...this.props} className="active" />
        );
    }
}