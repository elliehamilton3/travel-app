const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('Should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /countries', () => {
    const ENDPOINT = '/v1/countries'
    test('Should return a 200 response code', async () => {
        const response = await request(app).get(ENDPOINT);
        expect(response.status).toBe(200);
    });

    test('Should return an array', async () => {
        const response = await request(app).get(ENDPOINT);
        const responseBody = response.body;
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody).toHaveLength(249)
    });

    test('Should return an array of country objects', async () => {
        const response = await request(app).get(ENDPOINT);
        expect(response.body[0]).toMatchObject({
            "alpha-3": "AFG",
            "country-code": "004",
            "isTapWaterSafe": false,
            "name": "Afghanistan",
            "tapWaterExtraInfo": "",
          })
    });
});

xdescribe('GET /countries/name', () => {

    test('Should return a 404 response code if name parameter is missing', async () => {
        const response = await request(app).get('/v1/countries/name');
        expect(response.status).toBe(200);
    });

    test('Should return a 404 response code if name parameter is invalid', async () => {

    });

    test('Should return a 200 response code if name parameter is present and valid', async () => {
        
    });

    test('Should return an object with the correct information for the name parameter provided', async () => {
        
    });

    test('Should return an object with the correct information for the name parameter provided if the name parameter contains a space', async () => {
        
    });
});


describe('GET /countries/code', () => {
    const ENDPOINT = '/v1/countries/code';
    test('Should return a 404 response code if code parameter is missing', async () => {
        const response = await request(app).get(ENDPOINT);
        expect(response.status).toBe(404);
    });

    xtest('Should return a 404 response code if code parameter is invalid', async () => {
        const response = await request(app).get(`${ENDPOINT}/invalid`);
        expect(response.status).toBe(404);
    });
    
    test('Should return a 200 response code if code parameter is present and valid', async () => {
        const response = await request(app).get(`${ENDPOINT}/GBR`);
        expect(response.status).toBe(200);
    });

    test('Should return an object with the correct information for the code parameter provided', async () => {
        const response = await request(app).get(`${ENDPOINT}/GBR`);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            "name": "United Kingdom of Great Britain and Northern Ireland",
            "alpha-3": "GBR",
            "country-code": "826",
            "isTapWaterSafe": false,
            "tapWaterExtraInfo": ""
          })
    });
});
