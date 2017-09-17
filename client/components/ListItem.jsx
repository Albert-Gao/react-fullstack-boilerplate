import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, description, url, stars, language }) => (
    <li>Try
        <table>
            <tbody>
                <tr>
                    <td>
                        <a href={url}>Name:</a>
                    </td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{description}</td>
                </tr>
                <tr>
                    <td>Stars:</td>
                    <td>{stars}</td>
                </tr>
                <tr>
                    <td>Language:</td>
                    <td>{language}</td>
                </tr>
            </tbody>
        </table>
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
