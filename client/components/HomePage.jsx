import React from 'react';
import SearchBox from '../containers/SearchBox';
import SearchListContainer from '../containers/SearchListContainer';

const HomePage = () => {
    return (
        <div>
            <SearchBox />
            <SearchListContainer />
        </div>
    );
};

export default HomePage;
