const app = require('../src/app.js');
const request = require('supertest');

describe('GET /User', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).get('/users').send();
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with a json containing a list of users', async () => {
        const createNew =await request(app).post('/new-user').send({
            name: 'test',
            lastName: 'test',            
            password: 'test',
            phone: '666666',
            email: 'test'
        });
        expect(response.body).toContainEqual({
            name: 'test',
            lastName: 'test',
            password: 'test',
            phone: '666666',
            email: 'test'
    });
    });
});

describe('POST /new-user', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).post('/new-user').send({
            name: 'test',
            lastName: 'test',            
            password: 'test',
            phone: '666666',
            email: 'test'
        });
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "New user created', async () => {
        const response = await request(app).post('/new-user').send({
            name: 'test',
            lastName: 'test',            
            password: 'test',
            phone: '666666',
            email: 'test'
        });
        expect(response.text).toBe('new User created');
    });
});

describe('PUT /update-user/:id', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).put('/update-user/:id').send({
            name: 'test',
            lastName: 'test',            
            password: 'test',
            phone: '666666',
            email: 'test'
        });
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "User updated', async () => {
        const response = await request(app).put('/update-user/:id').send({
            name: 'test',
            lastName: 'test',            
            password: 'test',
            phone: '666666',
            email: 'test'
        });
        expect(response.text).toBe('User updated');
    });
}); 

describe('DELETE /delete-user/:id', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).delete('/delete-user/:id').send();
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "User deleted', async () => {
        const response = await request(app).delete('/delete-user/:id').send();
        expect(response.text).toBe('User deleted');
    });
});