import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Root from './Root';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: null
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => {
                this.setState({ gists });
            });
    }

    render() {
        const { gists } = this.state.gists;
        return (
            <Root>
                <Sidebar>
                    {gists ? (
                        gists.map(gist => (
                            <SidebarItem key={gist.id}>
                                {gist.description || '[no description]'}
                            </SidebarItem>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </Sidebar>
                <Main>
                    <h1>Welcome</h1>
                </Main>
            </Root>
        );
    }
}