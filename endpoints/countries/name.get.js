const Country = require('models/country');

async function getInfoByName(req, res) {
  try {
    const country = await Country.findByName(req.params.name);
    return res.json(country);
  } catch (e) {
    return res.sendStatus(404);
  }
}

module.exports = getInfoByName;
