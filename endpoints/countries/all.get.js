const getAllCountriesController = require('../../controllers/getAllCountries.js');

async function getAllCountries(req, res) {
  return res.json(await getAllCountriesController());
}

module.exports = getAllCountries;
