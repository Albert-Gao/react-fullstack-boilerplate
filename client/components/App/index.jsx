import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import AboutPage from '../AboutPage';
import HomePage from '../HomePage';
import NoMatchPage from '../NoMatchPage';
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
                    component={AboutPage}
                />
                <Route component={NoMatchPage} />
            </Switch>
        </div>
    );
};

export default App;
