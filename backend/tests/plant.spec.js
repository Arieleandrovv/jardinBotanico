const app = require('../src/app.js');
const request = require('supertest');

describe('GET /plant', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).get('/plants').send();
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with a json', async () => {
        const response = await request(app).get('/plants').send();
        expect(response.type).toBe('application/json');
    });
    test ('It should respond with a json containing a list of plants', async () => {
        const createNew =await request(app).post('/new-plant').send({
            name: 'nueva planta',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
        const response = await request(app).get('/plants').send();
        expect(response.body).toContainEqual({
            name: 'nueva planta',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
    });    
})


describe('POST /new-plant', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).post('/new-plant').send({
            name: 'test',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "New plant created', async () => {
        const response = await request(app).post('/new-plant').send({
            name: 'test',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
        expect(response.text).toBe('new Plant created');
    });
});

describe('PUT /update-plant/:id', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).put('/update-plant/:id').send({
            name: 'test',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "Plant updated', async () => {
        const response = await request(app).put('/update-plant/:id').send({
            name: 'test',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
        expect(response.text).toBe('Plant updated');
    });
});

describe('DELETE /delete-plant/:id', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).delete('/delete-plant/:id').send();
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with "Plant deleted', async () => {
        const response = await request(app).delete('/delete-plant/:id').send();
        expect(response.text).toBe('Plant deleted');
    });
});

describe('GET /plant/:id', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app).get('/plant/:id').send();
        expect(response.statusCode).toBe(200);
    });
    test('It should respond with a json', async () => {
        const response = await request(app).get('/plant/:id').send();
        expect(response.type).toBe('application/json');
    });
    test ('It should respond with a json containing a plant', async () => {
        const response = await request(app).get('/plant/:id').send();
        expect(response.body).toContainEqual({
            name: 'nueva planta',
            scientificName: 'test',
            type: 'test',
            description: 'test',
            plantNames: ['test', 'test', 'test']
        });
    });    
});