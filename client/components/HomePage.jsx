import React from 'react';
import SearchBox from '../containers/SearchBox';
import FilterContainer from '../containers/FilterContainer';
import SearchListContainer from '../containers/SearchListContainer';

const HomePage = () => (
    <div>
        <SearchBox />
        <FilterContainer />
        <SearchListContainer />
    </div>
);

export default HomePage;
