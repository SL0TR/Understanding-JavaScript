// Function Constructor - 'new'

function person(firstname, lastname) {
    this.firstName = firstname
    this.lastName = lastname
}

var john = new person('John', 'Doe')

var jane = new person('Jane', 'Johnson')

console.log(john)
console.log(jane)
