
module.exports = (first, second, cbk) => {
  first().then(second).then(console.log).then(cbk);
};
