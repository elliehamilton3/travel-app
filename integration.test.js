// eslint-disable-file
const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/');
        expect(response.status).toBe(404);
    });
});

describe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/uk');
        expect(response.status).toBe(200);
        expect(response.text).toBe("uk");
    });
});

describe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/albania');
        expect(response.status).toBe(200);
        expect(response.text).toBe("albania");
    });
});
