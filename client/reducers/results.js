import { actionTypes } from '../actions';

const results = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SUCCEEDED:
            return action.result;
        default:
            return state;
    }
};

export default results;
