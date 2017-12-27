import React from 'react';

export default class Gist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { gist } = this.props.gist;
        return (
            <div>
                <h1>{gist.description}</h1>
                <ul>
                    {Object.keys(gist.files).map(key => (
                        <li>
                            <b>{key}</b>
                            <Loadfile url={gist.files[key].raw_url}>
                                {(text) => (
                                    <pre>{text}</pre>
                                )}
                            </Loadfile>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}