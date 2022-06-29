var INPUT = require("./assets");
var getInputData = require('./helpers/getInputData');
var evalCompany = require('./helpers/evalCompany');
var setOutputData = require('./helpers/setOutputData');

const companies = getInputData(INPUT.COMPANIES);
const metrics = getInputData(INPUT.FINANCIAL_METRICS);

setOutputData(
  companies.map(company => evalCompany(company, metrics)),
  INPUT.OUTPUT_PATH
)