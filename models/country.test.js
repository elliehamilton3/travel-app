const mockAlbania = {
  alpha: 'ALB',
  code: '008',
  iswatersafe: false,
  name: 'Albania',
  waterinfo: '',
};
const mockAlbaniaData = {
  id: 3,
  ...mockAlbania,
};

const mockGBR = {
  name: 'United Kingdom of Great Britain and Northern Ireland',
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
      test('Should return an array of country objects', () => {
        mockAny.mockReturnValue(mockAllCountries);
        const countries = Country.all();
        expect(countries).toEqual([mockAlbania, mockGBR]);

        expect(countries[0]).toBeInstanceOf(Country);
      });
    });

    describe('.findByName', () => {
      test('Should return a country object by name', () => {
        mockOne.mockReturnValue(mockAlbaniaData);
        const albania = Country.findByName('Albania');
        expect(albania).toEqual(mockAlbania);

        expect(albania).toBeInstanceOf(Country);
      });
    });

    describe('.findByCode', () => {
      test('Should return a country object by code', () => {
        mockOne.mockReturnValue(mockAlbaniaData);
        const albania = Country.findByCode('ALB');
        expect(albania).toEqual(mockAlbania);

        expect(albania).toBeInstanceOf(Country);
      });
    });
  });

  xdescribe('.toJSON', () => {
    test('Should return a country object in a specific JSON format', () => {

    });
  });
});
