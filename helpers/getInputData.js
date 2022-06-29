function split(line, lineNumber) {
  if (lineNumber === 0) { // title line
    return line.split(',')
  }

  var parts = line.split(',')
  return parts
}

const getInputData = (path) => {                        // Dynamically input files for any kind of schema
  const { load } = require('csv-load-sync');
  const csv = load(path, {
    getColumns: split
  });
  return csv;
}

module.exports = getInputData;