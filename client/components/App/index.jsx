import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import './App.scss';

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    exact
                    path="/about"
                    render={() => <div>About Page</div>}
                />
                <Route render={({ location }) =>
                    <h3>No match for <code>{location.pathname}</code></h3>}
                />
            </Switch>
        </div>
    );
};

export default App;
