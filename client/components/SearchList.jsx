import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const SearchList = ({ status, results }) => {
    return (
        <ul>
            {results.map(todo =>
                <ListItem key={todo.id} {...todo} />
            )}
        </ul>
    );
};

SearchList.propTypes = {
    status: PropTypes.shape(({
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.object
    })).isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        language: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default SearchList;
