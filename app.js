console.log('Sending request to the server')
setTimeout(() => {
    console.log("Here is your data from ther server...")
}, 3000)
console.log('I am at the end of the file');



// callstack
// function multiply(x, y) {
//     return x * y;
// }

// function square(x) {
//     return multiply(x, x);
// }

// function isRightTrinagle(a, b, c) {
//     return square(a) + square(b) === square(c)
// }
// console.log('Before')
// isRightTrinagle(3, 4, 5)
// console.log('After')