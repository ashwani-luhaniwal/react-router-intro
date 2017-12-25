/**
 * React Router broken in 3 packages: "react-router", "react-router-dom", and
 * "react-router-native"
 * 
 * For browser based projects, there are <BrowserRouter> and <HashRouter> components
 */

import React from 'react';
import ReactDOM from 'react-dom';
// It uses HashRouter instead of BrowserRouter because there is no server to match URLs
import { BrowserRouter } from 'react-router-dom'; // Router component from React
import App from './components/App';

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), 
    document.getElementById('app')
);