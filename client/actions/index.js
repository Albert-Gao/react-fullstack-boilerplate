export const actionTypes = {
    NO_SEARCH_YET: 'NO_SEARCH_YET',

    SEARCH_REQUESTED: 'SEARCH_REQUESTED',
    SEARCH_STARTED: 'SEARCH_STARTED',
    SEARCH_SUCCEEDED: 'SEARCH_SUCCEEDED',
    SEARCH_FAILED: 'SEARCH_FAILED',

    SHOW_ENGLISH: 'SHOW_ENGLISH',
    SHOW_ALL: 'SHOW_ALL',

    CLEAR_LIST: 'CLEAR_LIST'
};

export const searchRepo = keyword => ({
    type: actionTypes.SEARCH_REQUESTED,
    payload: { keyword }
});

export const showEnglishItems = () => ({
    type: actionTypes.SHOW_ENGLISH
});

export const showAllItems = () => ({
    type: actionTypes.SHOW_ALL
});
