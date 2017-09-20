import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    };

    return (
        <nav>
            <ul className="horizontal">
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
