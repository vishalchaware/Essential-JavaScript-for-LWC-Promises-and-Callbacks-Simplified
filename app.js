const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    }
}

person.fullName();