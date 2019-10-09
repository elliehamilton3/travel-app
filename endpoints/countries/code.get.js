const Country = require('models/country');

async function getInfoByCountryCode(req, res) {
  try {
    const country = await Country.findByCode(req.params.code);
    return res.json(country);
  } catch (e) {
    return res.sendStatus(404);
  }
}

module.exports = getInfoByCountryCode;
