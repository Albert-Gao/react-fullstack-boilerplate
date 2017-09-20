import React from 'react';
import SearchBox from '../containers/SearchBox';
import SearchListContainer from '../containers/SearchListContainer';

const HomePage = ({match, location, history}) => (
    <div>
        <SearchBox />
        <SearchListContainer />
    </div>
);

export default HomePage;
