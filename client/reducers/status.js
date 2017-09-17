import { actionTypes } from '../actions';

const initialStatus = {
    isFetching: false,
    error: null
};

const status = (state = initialStatus, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_STARTED:
            return {
                isFetching: true,
                error: null
            };
        case actionTypes.SEARCH_SUCCEEDED:
            return {
                ...initialStatus
            };
        case actionTypes.SEARCH_FAILED:
            return {
                ...initialStatus,
                error: action.error
            };
        default:
            return state;
    }
};

export default status;
