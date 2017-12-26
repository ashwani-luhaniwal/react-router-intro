import React from 'react';
import ReactDOM from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthExample from './components/AuthExample';

ReactDOM.render(
    <BrowserRouter>
        <AuthExample />
    </BrowserRouter>,
    document.getElementById('app')
);