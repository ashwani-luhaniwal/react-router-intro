import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CategoryChild from './CategoryChild';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={`${this.props.match.url}/shoes`}>Shoes</Link></li>
                    <li><Link to={`${this.props.match.url}/boots`}>Boots</Link></li>
                    <li><Link to={`${this.props.match.url}/footwear`}>Footwear</Link></li>
                </ul>

                <Route path={`${this.props.match.path}/:name`} component={CategoryChild} />
            </div>
        );
    }
}