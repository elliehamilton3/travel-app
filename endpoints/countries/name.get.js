const getInfoByNameController = require('../../controllers/getInfoByName.js');

async function getInfoByName(req, res) {
  return res.json(await getInfoByNameController());
}

module.exports = getInfoByName;
