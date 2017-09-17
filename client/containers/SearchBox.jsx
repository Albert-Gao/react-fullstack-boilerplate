import React from 'react';
import { connect } from 'react-redux';
import { searchRepo } from '../actions';

let SearchBox = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(searchRepo(input.value));
                    input.value = '';
                }}
            >
                <input ref={(node) => { input = node; }} />
                <button type="submit">
                    Search Repo!
                </button>
            </form>
        </div>);
};
SearchBox = connect()(SearchBox);

export default SearchBox;
