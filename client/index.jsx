import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import configureStore from './store';

const store = configureStore();

function renderWrapper(Component) {
    render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
}

renderWrapper(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderWrapper(App);
    });
}
