
const setOutputData = (riskRatings, path) => {
  const fastCsv = require('fast-csv');
  const fs = require('fs');
  const ws = fs.createWriteStream(path);

  const outputData = riskRatings.reduce(
    (previousValue, riskRating) => [...previousValue, ...riskRating],
    []
  )

  fastCsv
    .write(outputData, { headers: true })
    .pipe(ws);

  console.log("Success!")
}

module.exports = setOutputData;