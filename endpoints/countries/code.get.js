const getInfoByCountryCodeController = require('../../controllers/getInfoByCountryCode.js');

async function getInfoByCountryCode(req, res) {
  return res.json(await getInfoByCountryCodeController());
}

module.exports = getInfoByCountryCode;
