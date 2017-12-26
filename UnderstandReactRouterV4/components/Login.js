import React from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from './fakeAuth';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        this.login = this.login.bind(this);
    }

    login() {
        fakeAuth.authenticate( () => {
            this.setState({ redirectToReferrer: true });
        });
    }

    render() {
        // The line below demonstrates object destructuring which is part of ES6 specification
        const { from } = this.props.location.state || { from: { pathname: '/'} };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}