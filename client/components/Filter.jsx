import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ showAllItems, showEnglishItems }) => (
    <div>
        <ul className="horizontal">
            <li>Language filters: </li>
            <button onClick={showAllItems}>ALL</button>
            <button onClick={showEnglishItems}>ENGLISH</button>
        </ul>
    </div>
);

Filter.propTypes = {
    showAllItems: PropTypes.func.isRequired,
    showEnglishItems: PropTypes.func.isRequired
};

export default Filter;
