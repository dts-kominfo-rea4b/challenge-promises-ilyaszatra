const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (feels) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const concatJson = theaterIXX.concat(theaterVGC);
  let feelsTotal = 0;

  for (i = 0; i < concatJson.length; i++) {
    if (concatJson[i].result == feels) {
      feelsTotal += 1;
    }
  }
  return feelsTotal;
};

module.exports = {
  promiseOutput,
};
