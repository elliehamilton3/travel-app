const Country = require('../../models/country');

async function getInfoByCountryCode(req, res) {
  return res.json(await Country.findByCode(req.params.code).toJSON());
}

module.exports = getInfoByCountryCode;
