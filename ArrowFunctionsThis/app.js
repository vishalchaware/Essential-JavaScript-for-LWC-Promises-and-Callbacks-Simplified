// Regular function
// function regularFunction() {
//     console.log(this);
// }
  
// Arrow function
// const arrowFunction = () => {
//     console.log(this);
// };


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         console.log(this)
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         console.log(this)
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
// }