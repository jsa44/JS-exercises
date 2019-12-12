const ftoc = function(f) {
  let tString = ((f-32)*(5/9)).toFixed(1);
  let cTemp = Number(tString);
  return cTemp;
}

const ctof = function(c) {
  let tString = ((c*(9/5))+32).toFixed(1);
  let fTemp = Number(tString);
  return fTemp;
}

module.exports = {
  ftoc,
  ctof
}
