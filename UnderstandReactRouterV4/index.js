/**
 * --------
 * history
 * --------
 * history is JavaScript library that lets you easily manage session history anywhere
 * JavaScript runs. It provides minimal API that lets you manage the history stack, 
 * navigate, confirm navigation and persist state between sessions.
 * 
 * Each router component creates a history object that keeps track of current location
 * (history.location) and also previous locations in stack. When the current location 
 * changes, the view is re-rendered and you get a sense of navigation.
 * 
 * How does the current location change ?
 * The history object has methods such as history.push() and history.replace() to take
 * care of that. history.push() is invoked when you click on a <Link> component and 
 * history.replace() is called when you use <Redirect> component.
 * Other methods - such as history.goBack() and history.goForward() are used to navigate
 * through the history stack by going back or forward a page.
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

render(
    /* Router component can only have single child element (HTML element or react component) */
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);