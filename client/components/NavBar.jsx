import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        activeStyle={activeStyle}
                        to="/"
                    >
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeStyle={activeStyle}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
