import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home.jsx';

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root'));
};

render(Home);

if (module.hot) {
    module.hot.accept('./components/Home/Home.jsx', () => {
        render(Home);
    });
}
