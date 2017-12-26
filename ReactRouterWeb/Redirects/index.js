import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AuthExample from './components/AuthExample';

render(
    <BrowserRouter>
        <AuthExample />
    </BrowserRouter>,
    document.getElementById('app')
);