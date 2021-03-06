import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './components/AppContainer';
import Home from './components/Home';

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
    </Route>
);