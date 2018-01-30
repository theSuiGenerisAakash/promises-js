// const promise = new Promise(resolve =>
//   resolve('PROMISE VALUE'));
//
// promise.then(console.log);
// console.log('MAIN PROGRAM');

module.exports = (resolveStr, syncStr, cbk) => {
  let strTotal = '';
  const promise = new Promise(resolve =>
    resolve(resolveStr));

  promise.then((result) => {
    strTotal += result;
    return cbk(strTotal);
  });
  strTotal += syncStr;
};
