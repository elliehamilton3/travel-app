function Country(name, alpha, code, iswatersafe, waterinfo) {
  this.name = name;
  this.alpha = alpha;
  this.code = code;
  this.iswatersafe = iswatersafe;
  this.waterinfo = waterinfo;

  const getResponseData = () => ({
    name,
    alpha,
    code,
    isWaterSafe: iswatersafe,
    waterInfo: waterinfo,
  });

  return {
    getResponseData,
  };
}

module.exports = Country;
