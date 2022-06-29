//Calculate LTC:CAC ratio

const INPUT = require('../../assets');

const calcLTCCACRatio = (totalSpend, metrics) => {
  const ratioValue = INPUT.LTCCAC_RATIO;
  const sum = metrics.reduce(
    (previewsValue, metric) => previewsValue + Number(metric.revenue),
    0
  );
  const ratioIndex = ratioValue.findIndex(
    ratio => ratio.moreThan < sum / totalSpend
  ); 
  return ratioValue[ratioIndex].value;
}

module.exports = calcLTCCACRatio;