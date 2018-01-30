require('es6-promise');

const promise = new Promise(((resolve, reject) => {
  // Your solution here
  resolve('hello');
}));

// const promise = new Promise(((fulfill, reject) => {
//   // Your solution here
//   setTimeout(() => fulfill('FULFILLED!'), 300);
// })).then(console.log);

module.exports = promise;
