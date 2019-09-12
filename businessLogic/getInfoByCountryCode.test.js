// eslint-disable-file
const getInfoByCountryCode = require('./getInfoByCountryCode.js');

test('Should return a json object if the country code provided is valid', () => {
  const country = getInfoByCountryCode('AFG');
  expect(country).toEqual({
    name: 'Afghanistan',
    'alpha-3': 'AFG',
    'country-code': '004',
    isTapWaterSafe: false,
    tapWaterExtraInfo: '',
  });
});
