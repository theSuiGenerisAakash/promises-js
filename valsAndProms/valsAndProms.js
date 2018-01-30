const attachTitle = val => `DR. ${val}`;

// module.exports = (prom, cbk) => {
//   prom.then(attachTitle).then((finalStr) => {
//     console.log(finalStr);
//     return cbk();
//   });
// };

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
