import React from 'react';
import fakeAuth from './fakeAuth';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferer: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        this.props.authenticate(() => {
            this.setState({ redirectToReferer: true })
        })
    }

    render() {
        const { from } = this.props.location.state || { from : { pathname: '/' } };
        const { redirectToReferer } = this.state;

        if (redirectToReferer) {
            return (
                <Redirect to={from} />
            )
        }
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}