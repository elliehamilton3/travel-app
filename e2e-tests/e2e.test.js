const request = require('supertest');

const app = 'http://localhost:3000';

describe('Test the root path', () => {
  test('Should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /countries', () => {
  const ENDPOINT = '/v1/countries';
  test('Should return a 200 response code', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.status).toBe(200);
  });

  test('Should return an array', async () => {
    const response = await request(app).get(ENDPOINT);
    const responseBody = response.body;
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBe(249);
  });

  test('Should return an array of country objects', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.body[0]).toMatchObject({
      name: 'Afghanistan',
      alpha: 'AFG',
      code: '004',
      isWaterSafe: false,
      waterInfo: '',
    });
  });

  test('Should return only the required fields for country objects', async () => {
    const response = await request(app).get(ENDPOINT);

    expect(response.body[0]).not.toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('alpha');
    expect(response.body[0]).toHaveProperty('code');
    expect(response.body[0]).toHaveProperty('isWaterSafe');
    expect(response.body[0]).toHaveProperty('waterInfo');
  });
});

describe('GET /countries/name', () => {
  const ENDPOINT = '/v1/countries/name';
  test('Should return a 404 response code if name parameter is missing', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.status).toBe(404);
  });

  test('Should return a 404 response code if name parameter is invalid', async () => {
    const response = await request(app).get(`${ENDPOINT}/invalid`);
    expect(response.status).toBe(404);
  });

  test('Should return a 200 response code if name parameter is present and valid', async () => {
    const response = await request(app).get(`${ENDPOINT}/Albania`);
    expect(response.status).toBe(200);
  });

  test('Should return an object with the correct information for the name parameter provided', async () => {
    const response = await request(app).get(`${ENDPOINT}/Albania`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: 'Albania',
      alpha: 'ALB',
      code: '008',
      isWaterSafe: false,
      waterInfo: '',
    });
  });

  test('Should return only the required fields for country object', async () => {
    const response = await request(app).get(`${ENDPOINT}/Albania`);

    expect(response.body).not.toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('alpha');
    expect(response.body).toHaveProperty('code');
    expect(response.body).toHaveProperty('isWaterSafe');
    expect(response.body).toHaveProperty('waterInfo');
  });

  test('Should return an object with the correct information for the name parameter provided if the name parameter contains a space', async () => {
    const response = await request(app).get(`${ENDPOINT}/United Kingdom`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: 'United Kingdom',
      alpha: 'GBR',
      code: '826',
      isWaterSafe: false,
      waterInfo: '',
    });
  });
});

describe('GET /countries/code', () => {
  const ENDPOINT = '/v1/countries/code';
  test('Should return a 404 response code if code parameter is missing', async () => {
    const response = await request(app).get(ENDPOINT);
    expect(response.status).toBe(404);
  });

  test('Should return a 404 response code if code parameter is invalid', async () => {
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
      name: 'United Kingdom',
      alpha: 'GBR',
      code: '826',
      isWaterSafe: false,
      waterInfo: '',
    });
  });

  test('Should return only the required fields for country object', async () => {
    const response = await request(app).get(`${ENDPOINT}/GBR`);

    expect(response.body).not.toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('alpha');
    expect(response.body).toHaveProperty('code');
    expect(response.body).toHaveProperty('isWaterSafe');
    expect(response.body).toHaveProperty('waterInfo');
  });
});
