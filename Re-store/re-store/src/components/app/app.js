import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages/'

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/card' component={CardPage}/>
        </Switch>
    )
}

export default App;