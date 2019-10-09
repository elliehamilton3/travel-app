const Country = require('models/country');

async function getAllCountries(req, res) {
  try {
    const countries = await await Country.all();
    return res.json(countries);
  } catch (e) {
    return res.sendStatus(404);
  }
}

module.exports = getAllCountries;
