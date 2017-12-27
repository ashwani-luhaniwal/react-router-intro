import React from 'react';
import { Link } from 'react-router-dom';

export default class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>React Router Demo</h1>
                <Link to='/list'><button>Show the list</button></Link>
            </div>
        );
    }
}