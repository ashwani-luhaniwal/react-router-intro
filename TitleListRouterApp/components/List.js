import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
                <Link to='/'><button>Back Home</button></Link>
            </div>
        );
    }
}