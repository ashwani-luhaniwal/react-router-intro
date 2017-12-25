import React from 'react';
import PlayerAPI from './PlayerAPI';    // API that returns player object

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        const player = PlayerAPI.get(
            parseInt(props.match.params.number, 10)
        );
    }
    render() {
        return (
            <div>
                if (!player) {
                    <div>Sorry, but the player was not found</div>
                }
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
            </div>
        );
    }
}