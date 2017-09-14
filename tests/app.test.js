const rp = require('request-promise');
const app = require('../server/app');

describe('Feathers application tests', () => {
    beforeEach((done) => {
        this.server = app.listen(3030);
        this.server.once('listening', () => done());
    });

    afterEach((done) => {
        this.server.close(done);
    });

    test('starts and shows the index page', async () => {
        const body = await rp('http://localhost:3030');
        expect(body.indexOf('<html lang="en">')).not.toEqual(-1);
    });

    describe('404', () => {
        test('shows a 404 HTML page', async () => {
            try {
                await rp({
                    url: 'http://localhost:3030/path/to/nowhere',
                    headers: { Accept: 'text/html' },
                });
            } catch (res) {
                expect(res.statusCode).toBe(404);
                expect(res.error.indexOf('<html>')).not.toEqual(-1);
            }
        });

        test('shows a 404 JSON error without stack trace', async () => {
            try {
                await rp({
                    url: 'http://localhost:3030/path/to/nowhere',
                    json: true,
                });
            } catch (res) {
                expect(res.statusCode).toEqual(404);
                expect(res.error.code).toEqual(404);
                expect(res.error.message).toEqual('Page not found');
                expect(res.error.name).toEqual('NotFound');
            }
        });
    });
});
