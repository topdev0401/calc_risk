// Calculate payback days and payback risk

const INPUT = require('../../assets');

const calcPaybackRisk = (totalSpend, metrics) => {
  let period = 0, spend = Number(totalSpend);
  const paybackRisk = INPUT.PAYBACK_RISK;

  while (spend > 0 && period < metrics.length) {
    spend -= metrics[period++].revenue;
  }

  if (spend > 0) period = 999;

  const paybackRiskIndex = paybackRisk.findIndex(
    risk => risk.lessThan > period
  );

  return paybackRisk[paybackRiskIndex].value;
}

module.exports = calcPaybackRisk;