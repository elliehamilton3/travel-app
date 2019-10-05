const db = require('../db/db.js');

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
    const country = db.one('SELECT * FROM countries WHERE name = $1', [name]);
    return new Country(
      country.name,
      country.alpha,
      country.code,
      country.iswatersafe,
      country.waterinfo,
    );
  }

  static findByCode(code) {
    const country = db.one('SELECT * FROM countries WHERE alpha = $1', [code]);
    return new Country(
      country.name,
      country.alpha,
      country.code,
      country.iswatersafe,
      country.waterinfo,
    );
  }

  toJSON() {
    return {
      name: this.name,
      alpha: this.alpha,
      code: this.code,
      isWaterSafe: this.iswatersafe,
      waterInfo: this.waterinfo,
    };
  }
}

module.exports = Country;
