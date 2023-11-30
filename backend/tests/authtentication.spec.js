const app = require('../src/app.js');
const request = require('supertest');

describe('POST /login', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).post('/login').send({
            email: 'test',
            password: 'test'
        });
        expect(response.statusCode).toBe(200);
    });
    test('it should respond with a welcome message', async () => {
        const response = await request(app).post('/login').send({
            email: 'test',
            password: 'test'
        });
        expect(response.text).toBe('Welcome');
    });
});

describe('POST /logout', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).post('/logout').send();
        expect(response.statusCode).toBe(200);
    });
    test('it should respond with a logout message', async () => {
        const response = await request(app).post('/logout').send();
        expect(response.text).toBe('Logout');
    });
}); 