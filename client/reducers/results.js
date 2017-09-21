import { actionTypes } from '../actions';

const results = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SUCCEEDED:
            return action.result;
        case actionTypes.SEARCH_FAILED:
            return action.error.message;
        default:
            return state;
    }
};

export default results;
