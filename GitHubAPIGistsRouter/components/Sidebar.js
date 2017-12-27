import React from 'react';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this.props;
        return (
            <div style={{
                width: '33vw',
                height: '100vh',
                overflow: 'auto',
                background: '#eee'
            }} {...props} />
        );
    }
}