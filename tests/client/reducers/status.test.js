import status from '../../../client/reducers/status';

describe('status reducer', () => {
    it('should handle initial state', () => {
        expect(
            status(undefined, { type: '123' })
        ).toEqual({ error: null, isFetching: false });
    });

    it('should handle SEARCH_STARTED', () => {
        expect(status(undefined, { type: 'SEARCH_STARTED' }))
            .toEqual({
                error: null,
                isFetching: true
            });
    });
});
