//  FUNCTION STATEMENTS : Works because of how functions are hoisted and executed 
greet()
function greet() {
    console.log('hi')
}

// FUNCTION EXPRESSIONS : Doesn't work because of how variables are hoisted and executed.
// blah()
var blah = function() {
    console.log('blah')
}
blah()


function log(a) {
    a()
}

log(function(){
    console.log('hi2')
})



// By value (primitives)
var a = 3
var b

b = a 
a = 2

console.log(a)
console.log(b)


// By reference (ALL objets (including funcitons))
var c = { greeting: 'hi'}
var d

d = c
c.greeting = 'hello'
console.log(d)
console.log(c)

// By reference (evenn as params)
function changeGreeting(obj) {
    obj.greeting = 'Hola!'
}

changeGreeting(d)
console.log(d)
console.log(c)


// Equals operator sets up new memory space (new address)
c = { greeting: 'howday'}
console.log(d)
console.log(c)

// -----------------THIS--------------------//

// This points to global window object
console.log(this)

function lul() {
    console.log(this)
    this.newVar = 'lalala'
}

var lel = function() {
    console.log(this)
}
lel()
lul()
console.log(newVar)

// this point to the object that it's method resides in
var chandu = {
    name: 'the c object',
    log: function() {
        var self = this

        this.name = 'updated c objectc'
        console.log(self)

        var setname = function(newname) {
            self.name = newname
        }
        setname('Updated Again! The c object')
        console.log(self)
    }
}

chandu.log()