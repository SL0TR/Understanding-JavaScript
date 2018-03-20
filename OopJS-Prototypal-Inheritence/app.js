// ---------------------Protoype Inheritence-------------------- //


var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

var john = {
    firstName: 'John',
    lastName: 'Bro'
}

// DON'T EVER DO IT! Only for demo purposes
john.__proto__ = person 

console.log(john.getFullName())


// ---------------------Reflection-------------------- //


for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop])
    }
}



var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName
    }
}

var jim = {
    getFirstName: function() {
        return firstName
    }
}

_.extend(john, jane, jim)

console.log(john)