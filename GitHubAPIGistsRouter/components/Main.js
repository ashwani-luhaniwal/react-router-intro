import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this.props;
        return (
            <div style={{
                flex: 1,
                height: '100vh',
                overflow: 'auto'
            }}>
                <div style={{ padding: '20px' }} {...props} />
            </div>
        );
    }
}