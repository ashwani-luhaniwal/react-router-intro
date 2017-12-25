import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ParamsExample from './components/ParamsExample';

ReactDOM.render(
    <BrowserRouter>
        <ParamsExample />
    </BrowserRouter>,
    document.getElementById('app')
);