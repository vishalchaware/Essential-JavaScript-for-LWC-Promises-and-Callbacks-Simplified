function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function isRightTrinagle(a, b, c) {
    return square(a) + square(b) === square(c)
}
console.log('Before')
isRightTrinagle(3, 4, 5)
console.log('After')