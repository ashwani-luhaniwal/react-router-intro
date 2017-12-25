/**
 * The Player looks up the player using the number parsed from the 
 * URL's pathname. If no player is found with given number, then a
 * "player not found" message is displayed.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from './PlayerAPI';    // API that returns player object

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}
export default Player;

/*export default class Player extends React.Component {
    constructor(props) {
        super(props);
        const player = this.props.get(
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
}*/