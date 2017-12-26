/**
 * ----------------------------
 * Nested Routing in Router V4
 * ----------------------------
 * In V4, the nested <Route>s should preferably go inside the parent component.
 * Category component is the parent here and we'll be declaring the routes for
 * "category/:name" inside the parent component
 */

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

                {/* 
                    :name is a path parameter and catches everything after "category/" until another
                    forward slash is encountered. So, a pathname like "products/running-shoes" will
                    create a "params" object as follows:
                        {
                            name: 'running-shoes'
                        }
                    The captured data should be accessible at "match.params" or "props.match.params"
                    depending on how the props are passed.
                */}
                <Route path={`${this.props.match.path}/:name`} component={CategoryChild} />
            </div>
        );
    }
}