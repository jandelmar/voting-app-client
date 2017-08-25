import React from 'react';
import {List} from 'immutable';
import {Switch, Route, Link} from 'react-router-dom';

import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');

const App = () => (
    <Switch>
        <Route exact path='/' render={() => (
            <Voting pair={pair}/>
        )}/>
        <Route path="/results" component={Results} />
    </Switch>
)

export default App;