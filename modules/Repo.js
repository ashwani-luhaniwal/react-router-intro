import React from 'react';

export default class Repo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                {/* Both "repoName" and "userName" are available on "this.props.params" of your component */}
                <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
}