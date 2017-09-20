import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import './App.scss';

const App = () => (
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
                render={({ location, history }) => (
                    <div>
                        <p>We are at: {location.pathname}</p>
                        <button onClick={() => history.push('/')}>
                            Go searching
                        </button>
                    </div>
                )}
            />
            <Route render={({ location }) =>
                <h3>No match for <code>{location.pathname}</code></h3>}
            />
        </Switch>
    </div>
);

export default App;
