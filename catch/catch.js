const promiseRes = Promise.resolve('Resolved');
const promiseRej = Promise.reject(new Error('Rejected'));

promiseRej.catch(err => console.log(err));

module.exports = {
  promiseRes, promiseRej,
};
