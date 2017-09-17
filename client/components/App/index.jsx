import React from 'react';
import SearchBox from '../../containers/SearchBox';
import SearchListContainer from '../../containers/SearchListContainer';
import './App.scss';

const App = () => (
    <div>
        <SearchBox />
        <SearchListContainer />
    </div>
);

export default App;
