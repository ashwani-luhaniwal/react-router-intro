import React from 'react';

export default class PlayerAPI extends React.Component {
    constructor(props) {
        super(props);
        const players = [
            { number: 1, name: 'Ben Blocker', position: 'G' },
            { number: 2, name: 'Dave Defender', position: 'D' },
            { number: 3, name: 'Sam Sweeper', position: 'D' },
            { number: 4, name: 'Matt Midfielder', position: 'M' },
            { number: 5, name: 'William Winger', position: 'M' },
            { number: 6, name: 'Fillipe Forward', position: 'F' }
        ]
        this.all = this.all.bind(this);
        this.get = this.get.bind(this, id);
    }
    all() {
        return this.players;
    }
    get(id) {
        const isPlayer = p => p.number === id;
        return this.players.find(isPlayer); 
    }
    render() {
        return (
            <div>PlayerAPI</div>
        );
    }
}