import React from 'react';

export default class CategoryChild extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.match.params.name}</h3>
            </div>
        );
    }
}