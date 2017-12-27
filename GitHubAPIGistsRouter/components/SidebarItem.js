import React from 'react';

export default class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this.props;
        return (
            <div style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                padding: '5px 10px'
            }} {...props} />
        );
    }
}