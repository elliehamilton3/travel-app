const mockAlbania = {
  alpha: 'ALB',
  code: '008',
  iswatersafe: false,
  name: 'albania',
  waterinfo: '',
};
const mockAlbaniaData = {
  id: 3,
  ...mockAlbania,
};

const mockGBR = {
  name: 'united kingdom',
  alpha: 'GBR',
  code: '826',
  iswatersafe: false,
  waterinfo: '',
};

const mockGBRData = {
  id: 235,
  ...mockGBR,
};

const mockAllCountries = [
  mockAlbaniaData,
  mockGBRData,
];

const mockOne = jest.fn();
const mockAny = jest.fn();
const mockDB = jest.fn().mockReturnValue({
  one: mockOne,
  any: mockAny,
});

jest.doMock('pg-promise', () => () => mockDB);
const Country = require('./country');

describe('Country', () => {
  beforeEach(() => {
    jest.resetModules();
    mockOne.mockReset();
    mockAny.mockReset();
  });

  describe('static functions', () => {
    describe('.all', () => {
      test('Should return an array of country objects', async () => {
        mockAny.mockResolvedValue(mockAllCountries);
        const countries = await Country.all();
        expect(countries).toEqual([mockAlbania, mockGBR]);

        expect(countries[0]).toBeInstanceOf(Country);
      });
      xtest('Should ... if the database returns an error', () => {});
      test('Should return an empty array if the database returns no data', async () => {
        mockAny.mockResolvedValue([]);
        const noData = await Country.all();
        expect(noData).toEqual([]);
      });
    });

    describe('.findByName', () => {
      test('Should return a country object by name', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        const albania = await Country.findByName('Albania');
        expect(albania).toEqual(mockAlbania);

        expect(albania).toBeInstanceOf(Country);
      });
      test('Should throw an error if the database returns an error', async () => {
        mockOne.mockRejectedValue(Error);
        try {
          await Country.findByName('ALB');
        } catch (e) {
          expect(e).toEqual(Error);
        }
      });
      test('Should return an empty object if the database returns no data', async () => {
        mockOne.mockResolvedValue({});
        const noData = await Country.findByName('Albania');
        expect(noData).toEqual({});
      });
      test('Should handle capitalized data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByName('Albania');
        expect(mockOne.mock.calls[0][1][0]).toEqual('albania');
      });
      test('Should handle lowercase data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByName('albania');
        expect(mockOne.mock.calls[0][1][0]).toEqual('albania');
      });
      test('Should handle uppercase data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByName('ALBANIA');
        expect(mockOne.mock.calls[0][1][0]).toEqual('albania');
      });
    });

    describe('.findByCode', () => {
      test('Should return a country object by code', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        const albania = await Country.findByCode('ALB');
        expect(albania).toEqual(mockAlbania);

        expect(albania).toBeInstanceOf(Country);
      });
      test('Should throw an error if the database returns an error', async () => {
        mockOne.mockRejectedValue(Error);
        try {
          await Country.findByCode('ALB');
        } catch (e) {
          expect(e).toEqual(Error);
        }
      });
      test('Should return an empty object if the database returns no data', async () => {
        mockOne.mockResolvedValue({});
        const noData = await Country.findByCode('ALB');
        expect(noData).toEqual({});
      });
      test('Should handle capitalized data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByCode('Alb');
        expect(mockOne.mock.calls[0][1][0]).toEqual('ALB');
      });
      test('Should handle lowercase data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByCode('alb');
        expect(mockOne.mock.calls[0][1][0]).toEqual('ALB');
      });
      test('Should handle uppercase data passed in', async () => {
        mockOne.mockResolvedValue(mockAlbaniaData);
        await Country.findByCode('ALB');
        expect(mockOne.mock.calls[0][1][0]).toEqual('ALB');
      });
    });
  });

  describe('.toJSON', () => {
    test('Should return a country object in a specific JSON format', () => {
      const country = new Country('name', 'alpha', 'CODE', 'iswatersafe', 'waterinfo');
      expect(country.toJSON()).toEqual({
        alpha: 'alpha',
        code: 'CODE',
        isWaterSafe: 'iswatersafe',
        name: 'Name',
        waterInfo: 'waterinfo',
      });
    });

    test('Should return a country object with code in uppercase', () => {
      const country = new Country('name', 'alpha', 'code', 'iswatersafe', 'waterinfo');
      expect(country.toJSON()).toEqual({
        alpha: 'alpha',
        code: 'CODE',
        isWaterSafe: 'iswatersafe',
        name: 'Name',
        waterInfo: 'waterinfo',
      });
    });

    test('Should return a country object with name capitalised', () => {
      const country = new Country('name country', 'alpha', 'code', 'iswatersafe', 'waterinfo');
      expect(country.toJSON()).toEqual({
        alpha: 'alpha',
        code: 'CODE',
        isWaterSafe: 'iswatersafe',
        name: 'Name Country',
        waterInfo: 'waterinfo',
      });
    });
  });
});
