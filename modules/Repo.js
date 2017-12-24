import React from 'react';

export default class Repo extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
}