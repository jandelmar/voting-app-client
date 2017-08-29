import React from 'react';
import {List, Map} from 'immutable';
import {Switch, Route, Link} from 'react-router-dom';

import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

const App = () => (
    <Switch>
        <Route exact path='/' render={() => (
            <VotingContainer />
        )}/>
        <Route path='/results' render={() => (
            <ResultsContainer />
        )}/>
    </Switch>
)

export default App;