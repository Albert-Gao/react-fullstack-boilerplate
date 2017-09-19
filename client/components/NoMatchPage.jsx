import React from 'react';

const NoMatchPage = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

export default NoMatchPage;
