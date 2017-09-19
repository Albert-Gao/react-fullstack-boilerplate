import * as actions from '../../../client/actions/index';

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
