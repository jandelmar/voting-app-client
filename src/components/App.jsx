import React from 'react';
import {List, Map} from 'immutable';
import {Switch, Route, Link} from 'react-router-dom';

import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

const App = () => (
    <Switch>
        <Route exact path='/' render={() => (
            <Voting pair={pair}/>
        )}/>
        <Route path='/results' render={() => (
            <Results pair={pair} tally={tally}/>
        )}/>
    </Switch>
)

export default App;