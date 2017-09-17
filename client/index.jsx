import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/store';

const store = configureStore();

function renderWrapper(Component) {
    render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root'),
    );
}

renderWrapper(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderWrapper(App);
    });
}
