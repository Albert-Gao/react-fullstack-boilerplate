import { actionTypes } from '../actions';

const filter = (state = actionTypes.SHOW_ALL, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ALL:
        case actionTypes.SHOW_ENGLISH:
            return action.type;
        default:
            return state;
    }
};

export default filter;
