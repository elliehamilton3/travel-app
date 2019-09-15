const request = require('supertest');
const mockAllCountries = require('./mockAllCountries.json');

const mockGBRData = {
  id: 235,
  name: 'United Kingdom of Great Britain and Northern Ireland',
  alpha: 'GBR',
  code: '826',
  iswatersafe: false,
  waterinfo: '',
};

const mockAlbaniaData = {
  id: 3,
  name: 'Albania',
  alpha: 'ALB',
  code: '008',
  iswatersafe: false,
  waterinfo: '',
};

const mockOne = jest.fn();
const mockAny = jest.fn();
const mockDB = jest.fn().mockReturnValue({
  one: mockOne,
  any: mockAny,
});

jest.doMock('pg-promise', () => () => mockDB);

const app = require('../app');

describe('Test the root path', () => {
  test('Should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /countries', () => {
  beforeEach(() => {
    jest.resetModules();
    mockOne.mockReset();
    mockAny.mockReset();
  });
  const ENDPOINT = '/v1/countries';
  test('Should return a 200 response code', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.status).toBe(200);
  });

  test('Should return an array', async () => {
    mockAny.mockReturnValue(mockAllCountries);
    const response = await request(app).get(ENDPOINT);
    const responseBody = response.body;
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBe(249);
  });

  test('Should return an array of country objects', async () => {
    mockAny.mockReturnValue(mockAllCountries);
    const response = await request(app).get(ENDPOINT);
    // TODO: Update to match object exactly no extra fields
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: 'Afghanistan',
      alpha: 'AFG',
      code: '004',
      iswatersafe: false,
      waterinfo: '',
    });
  });
});

describe('GET /countries/name', () => {
  const ENDPOINT = '/v1/countries/name';
  test('Should return a 404 response code if name parameter is missing', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.status).toBe(404);
  });

  xtest('Should return a 404 response code if name parameter is invalid', async () => {
    const response = await request(app).get(`${ENDPOINT}/invalid`);
    expect(response.status).toBe(404);
  });

  test('Should return a 200 response code if name parameter is present and valid', async () => {
    mockOne.mockReturnValue(mockAlbaniaData);
    const response = await request(app).get(`${ENDPOINT}/Albania`);
    expect(response.status).toBe(200);
  });

  test('Should return an object with the correct information for the name parameter provided', async () => {
    mockOne.mockReturnValue(mockAlbaniaData);
    const response = await request(app).get(`${ENDPOINT}/Albania`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 3,
      name: 'Albania',
      alpha: 'ALB',
      code: '008',
      iswatersafe: false,
      waterinfo: '',
    });
  });

  test('Should return an object with the correct information for the name parameter provided if the name parameter contains a space', async () => {
    mockOne.mockReturnValue(mockGBRData);
    const response = await request(app).get(`${ENDPOINT}/United Kingdom of Great Britain and Northern Ireland`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 235,
      name: 'United Kingdom of Great Britain and Northern Ireland',
      alpha: 'GBR',
      code: '826',
      iswatersafe: false,
      waterinfo: '',
    });
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
    mockOne.mockReturnValue(mockGBRData);
    const response = await request(app).get(`${ENDPOINT}/GBR`);
    expect(response.status).toBe(200);
  });

  test('Should return an object with the correct information for the code parameter provided', async () => {
    mockOne.mockReturnValue(mockGBRData);
    const response = await request(app).get(`${ENDPOINT}/GBR`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 235,
      name: 'United Kingdom of Great Britain and Northern Ireland',
      alpha: 'GBR',
      code: '826',
      iswatersafe: false,
      waterinfo: '',
    });
  });
});
