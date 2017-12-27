/**
 * The key idea behind version 4 is "declarative composability" - it embraces the component
 * concept that makes React so great and applies it to routing. Everyr part of React 
 * Router 4 is a React component: Router, Router, Link.
 */

import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Root from './Root';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import Main from './Main';
import Gist from './Gist';
import Home from './Home';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: null
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => {
                // console.log(gists);
                this.setState({ gists });
            });
    }

    render() {
        const { gists } = this.state;
        console.log(gists);
        return (
            <Root>
                <Sidebar>
                    {gists ? (
                        gists.map(gist => (
                            <SidebarItem key={gist.id}>
                                <Link to={`/g/${gist.id}`}>
                                    {gist.description || '[no description]'}
                                </Link>
                            </SidebarItem>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </Sidebar>
                <Main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        {/* If we have gists then only render the Gist component */}
                        {gists && (
                            <Route path='/g/:gistId' render={ ({match}) => (
                                <Gist gist={ gists.find(g => g.id === match.params.gistId) } />
                            )} />
                        )}
                    </Switch>
                </Main>
            </Root>
        );
    }
}