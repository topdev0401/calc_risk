const INPUT = require('../assets');

const calcRiskSignals = require('./calc_risk_signals');

// Evaluate Application in one company

const evalApp = (company, appName, companyMetrics) => {
  var filteredMetrics = companyMetrics.filter(
    metric => metric.app_name === appName
  )

  const spendIndex = filteredMetrics.findIndex(    // index of marketing-spend day
    metric => metric.marketing_spend !== undefined
  );

  const riskRatingArray = INPUT.RISK_RATING;

  filteredMetrics = filteredMetrics.slice(          // start from marketing-spend day
    spendIndex, filteredMetrics.length - 1
  );

  let riskScore = 0;
  
  for(let i = 0 ; i < calcRiskSignals.length ; i ++) {  // Calculate risk score
    riskScore += calcRiskSignals[i](filteredMetrics[0].marketing_spend, filteredMetrics)  // functions of calculating risk signals
               * INPUT.RISK_SCORE_WEIGHTING[i]                                          // risk score weighting array
  }

  const riskRatingIndex = riskRatingArray.findIndex(
    riskRating => riskRating.moreThan < riskScore
  );

  const riskRating = riskRatingArray[riskRatingIndex].value;

  return {
    company_id: company.company_id,
    company_name: company.company_name,
    app_name: appName,
    risk_score: riskScore,
    risk_rating: riskRating
  };
}

//Evaulate every apps in company and returns array of results.

const evalCompany = (company, metrics) => {
  var companyMetrics = metrics.filter(
    metric => metric.company_id === company.company_id
  );
  const resArr = []
  while (companyMetrics.length) {
    resArr.push(evalApp(company, companyMetrics[0].app_name, companyMetrics))

    companyMetrics = companyMetrics.filter(
      metric => metric.app_name !== companyMetrics[0].app_name
    );
  }
  return resArr;
}

module.exports = evalCompany;