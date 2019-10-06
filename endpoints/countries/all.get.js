const Country = require('models/country');

async function getAllCountries(req, res) {
  return res.json(await Country.all());
}

module.exports = getAllCountries;
