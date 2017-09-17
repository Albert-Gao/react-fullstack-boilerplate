import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    /* eslint-disable no-underscore-dangle */
    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
    );
    /* eslint-enable */

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => {
                const nextReducer = require('../reducers/index').default;
                store.replaceReducer(nextReducer);
            });
    }

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
