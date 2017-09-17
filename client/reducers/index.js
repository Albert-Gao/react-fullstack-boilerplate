import { combineReducers } from 'redux';

import status from './status';
import results from './results';

const searchApp = combineReducers({
    status,
    results,
});

export default searchApp;
