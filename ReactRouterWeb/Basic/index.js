import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BasicExample from './components/BasicExample';

ReactDOM.render(
    <BrowserRouter>
        <BasicExample />
    </BrowserRouter>,
    document.getElementById('app')
);