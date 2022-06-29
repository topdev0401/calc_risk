const calcLTCCACRatio = require('./calcLTCCACRatio');
const calcPaybackRisk = require('./calcPaybackRisk');

module.exports = [
  calcPaybackRisk,
  calcLTCCACRatio
]