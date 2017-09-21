import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const SearchList = ({ status, results }) => {
    let message = '';
    if (results.length === 0) {
        message = 'No search yet!!!';
    }
    if (status.isFetching) {
        message = 'Loading...';
    }
    if (typeof results === 'string'){
        message = results;
    }
    return (
        message
            ? <p>{message}</p>
            : <ol>
                {results.map(todo =>
                    <ListItem key={todo.id} {...todo} />
                )}
            </ol>
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
