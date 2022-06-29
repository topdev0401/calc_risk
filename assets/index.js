const INPUT_PATH = "./input_data/";
const OUTPUT_PATH = "./output_data/";

const paybackRiskValue = [
  {
    lessThan: 7,
    value: 100
  },
  {
    lessThan: 14,
    value: 80
  },
  {
    lessThan: 21,
    value: 60
  },
  {
    lessThan: 28,
    value: 30
  },
  {
    lessThan: 1000,
    value: 10
  }
]

const LTCCACValue = [
  {
    moreThan: 3,
    value: 100
  },
  {
    moreThan: 2.5,
    value: 80
  },
  {
    moreThan: 2,
    value: 60
  },
  {
    moreThan: 1.5,
    value: 30
  },
  {
    moreThan: 0,
    value: 10
  }
]

const ristRating = [
  {
    moreThan: 85,
    value: "Undoubted"
  },
  {
    moreThan: 65,
    value: "Low"
  },
  {
    moreThan: 45,
    value: "Moderate"
  },
  {
    moreThan: 25,
    value: "Cautionary"
  },
  {
    moreThan: 15,
    value: "Unsatisfactory"
  },
  {
    moreThan: 0,
    value: "Unacceptable"
  }
]

const riskScoreWeighting = [
  0.7,
  0.3
]

module.exports = {
  COMPANIES: INPUT_PATH + "app-companies.csv",
  FINANCIAL_METRICS: INPUT_PATH + "app-financial-metrics.csv",
  OUTPUT_PATH: OUTPUT_PATH + "output.csv",
  PAYBACK_RISK: paybackRiskValue,
  LTCCAC_RATIO: LTCCACValue,
  RISK_RATING: ristRating,
  RISK_SCORE_WEIGHTING: riskScoreWeighting
}