const promiseRes = Promise.resolve('Resolved');
const promiseRej = Promise.reject(new Error('Rejected'));
const rejectFunc = (cbk) => {
  promiseRej.catch(err => cbk(err));
};

module.exports = {
  promiseRes, rejectFunc, promiseRej,
};
