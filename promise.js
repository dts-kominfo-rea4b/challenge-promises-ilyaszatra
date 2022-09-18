const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (feeling) => {
  const a = await promiseTheaterIXX();
  const b = await promiseTheaterVGC();

  const c = a.concat(b);
  let result = 0;

  for (i = 0; i < c.length; i++) {
    if (c[i].hasil == feeling) {
      console.log(feeling); //mencetak feeling
      result += 1;
    }
  }

  return result;
};

module.exports = {
  promiseOutput,
};
