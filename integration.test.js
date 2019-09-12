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
        const response = await request(app).get('/countries/AFG');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: 'Afghanistan',
            'alpha-3': 'AFG',
            'country-code': '004',
            isTapWaterSafe: false,
            tapWaterExtraInfo: '',
          });
    });
});

xdescribe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/uk');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({"safeTapWater": true});
    });
});

xdescribe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/albania');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({"safeTapWater": false});
    });
});

xdescribe('Test the country path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/country/france');
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    });
});