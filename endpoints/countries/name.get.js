const Country = require('../../models/country');

async function getInfoByName(req, res) {
  return res.json(await Country.findByName(req.params.name).toJSON());
}

module.exports = getInfoByName;
