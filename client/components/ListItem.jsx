import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, description, url, stars, language }) => (
    <li><a href={url} target="_blank">{name}</a>
        <ul>
            <li>Description: {description}</li>
            <li>Language: {language}</li>
            <li>Stars: {stars}</li>
        </ul>
        <br />
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired
};

export default ListItem;
