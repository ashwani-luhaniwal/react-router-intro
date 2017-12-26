import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Products from './Products';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Homes</Link></li>
                        <li><Link to='/category'>Category</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                    </ul>
                </nav>

                {/* Route components are rendered if the path prop matches the current URL */}
                <Route path='/' component={Home} />
                <Route path='/category' component={Category} />
                <Route path='/products' component={Products} />
                
            </div>
        );
    }
}