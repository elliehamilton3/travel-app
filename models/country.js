const db = require('db/db.js');

class Country {
  constructor(name, alpha, code, iswatersafe, waterinfo) {
    this.name = name;
    this.alpha = alpha;
    this.code = code;
    this.iswatersafe = iswatersafe;
    this.waterinfo = waterinfo;
  }

  static all() {
    const countries = db.any('SELECT * FROM countries');
    return countries.map(country => (
      new Country(
        country.name,
        country.alpha,
        country.code,
        country.iswatersafe,
        country.waterinfo,
      )));
  }

  static findByName(name) {
    const country = db.one('SELECT * FROM countries WHERE name = $1', [name.toLowerCase()]);
    return new Country(
      country.name,
      country.alpha,
      country.code,
      country.iswatersafe,
      country.waterinfo,
    );
  }

  static findByCode(code) {
    const country = db.one('SELECT * FROM countries WHERE alpha = $1', [code.toUpperCase()]);
    return new Country(
      country.name,
      country.alpha,
      country.code,
      country.iswatersafe,
      country.waterinfo,
    );
  }

  toJSON() {
    const capitalisedName = this.name.split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    return {
      name: capitalisedName,
      alpha: this.alpha,
      code: this.code.toUpperCase(),
      isWaterSafe: this.iswatersafe,
      waterInfo: this.waterinfo,
    };
  }
}

module.exports = Country;
