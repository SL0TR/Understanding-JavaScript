// Polyfill

if(!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.')
        }
        function F() {
            F.prototype = o
            return new F()
        }
    }
}



// Function Constructor - 'new'

function Person(firstname, lastname) {
    this.firstName = firstname
    this.lastName = lastname
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

var john = new Person('John', 'Doe')

var jane = new Person('Jane', 'Johnson')

console.log(john.getFullName())
console.log(jane)


// Function Constructor - Object.create

var hooman = {
    firstName: 'Default',
    lastName: 'Default',
    greet: function() {
        return 'Hi ' + this.firstName
    }
}

var carl = Object.create(hooman)

carl.firstName = 'Carl'
carl.lastName = 'Doe'

console.log(carl.greet()) 