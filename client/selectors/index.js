import { createSelector } from 'reselect';
import { actionTypes } from '../actions';

const getFilter = state => state.filter;
const getResults = state => state.results;

const getFilteredResults = createSelector(
    [getFilter, getResults],
    (filter, results) => {
        switch (filter) {
            case actionTypes.SHOW_ALL:
                return results;
            case actionTypes.SHOW_ENGLISH:
                return results.filter(t => /^[A-Za-z0-9 ]*$/.test(t.description));
            default:
                return results;
        }
    }
);

export default getFilteredResults;
