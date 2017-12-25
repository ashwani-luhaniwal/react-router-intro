import React, { Children } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Child from './Child';

const ParamsExample = () => (
    <div>
        <h2>Accounts</h2>
        <ul>
            <li><Link to='/netflix'>Netflix</Link></li>
            <li><Link to='/zillow-group'>Zillow Group</Link></li>
            <li><Link to='/yahoo'>Yahoo</Link></li>
            <li><Link to='/modus-create'>Modus Create</Link></li>
        </ul>

        <Switch>
            <Route path='/:id' component={Child} />
        </Switch>
    </div>
)
export default ParamsExample;