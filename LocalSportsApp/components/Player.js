import React from 'react';
import PlayerAPI from './PlayerAPI';    // API that returns player object

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }
    const player = PlayerAPI.get(
        parseInt()props
    )
    render() {
        return (
            <div>Player</div>
        );
    }
}