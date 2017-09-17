import * as actions from './index';

describe('actions', () => {
    it('searchRepo should create SEARCH_REQUESTED action', () => {
        expect(actions.searchRepo('Redux')).toEqual({
            type: 'SEARCH_REQUESTED',
            payload: {
                keyword: 'Redux'
            }
        });
    });
});
