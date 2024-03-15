// function add(a, b) {
//     return a + b
// }
// function sub(a, b) {
//     "this function never return negative value"
//     return `"this function never return negative value"\n ${a >= b ? a - b : b - a}`
// }
// module.exports = { addFn: add, subFn: sub };

exports.add = (a, b) => a + b;
exports.sub = (a, b) => `"this function never return negative value"\n ${a >= b ? a - b : b - a}`
