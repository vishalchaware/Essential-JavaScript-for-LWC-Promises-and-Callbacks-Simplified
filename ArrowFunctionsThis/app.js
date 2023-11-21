
// It’s common that an object method needs to access the information stored in the object to do its job.
// The value of this is evaluated during the run-time, depending on the context.
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         console.log(this)
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside

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