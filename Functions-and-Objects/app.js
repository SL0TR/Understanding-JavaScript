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

// -----------------THIS-------------------- //

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

// ---------------------ARRAYS--------------------- //

// Can store any type of data on arrays because of JS's Dynamic Typing
let arr = [
    1,
    false,
    {
        name: 'chandu',
        address: 'chandur baari'
    },
    function(name) {
        let greeting = 'Hello '
        console.log(greeting + name)
    },
    'chika'
]

console.log(arr)
arr[3](arr[2].name)



// ---------------------ARGUMENTS-------------------- //

function args(arg1, arg2, arg3) {
    if (arguments.length === 0) {
        console.log('Missing parameters yo')
        return
    }
    console.log('------------------')
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
    console.log(arguments)
    console.log('------------------')
}

args()

// ---------------------SPREAD -------------------- //

function args(arg1, arg2, arg3, ...other) {
    console.log('------------------')
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
    console.log(other)
    console.log(arguments)
    console.log('------------------')
}

args('la', 'ka', 'chu', 'ni', 'chaas')


// ---------------------IIFE-------------------- //

var greeting = function(name) {
    return 'I"m an ' + name;
}('IIFE')

console.log(greeting)

var firstName = 'John';
(function(name) {

    var greeting = 'Inside IIFE: HELLO '
    console.log(greeting + ' '+ name )

}(firstName));


// ---------------------CLOSURES-------------------- //

function meet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name)
    }
}

meet('Hi')('Toncy')

// Closue : Problem 1

function buildFunction() {
    var arr = []
    
    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i)
            }
        )
    }

    return arr
}

var fs = buildFunction()

fs[0]()
fs[1]()
fs[2]()

// Solution to Problem 1 with ES5 IIFE

function buildFunction2() {
    var arr = []

    for (var i = 0; i < 3; i++) {
        arr.push( 
            (function(j) {
                return function() {
                    console.log(j)
                }
            }(i))
        )
    }

    return arr
}

var fs2 = buildFunction2()

fs2[0]()
fs2[1]()
fs2[2]()

// Solution to Problem 1 with ES6 Let

function buildFunction3() {
    var arr = []

    for(let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i)
            }
        )
    }

    return arr
}

var fs3 = buildFunction3()

fs3[0]()
fs3[1]()
fs3[2]()


// Closure : Example 2

function makeGreeting(language) {
    return function(firstName, lastName) {
        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName)
        } else if ( language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName)
        }
    }
}

var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es')

greetEnglish('John', 'Doe')
greetSpanish('John', 'Doe')


// ---------------------CALLBACK-------------------- //

function callBackFunciton(theCallback) {
    var a = 10000
    var b = 20

    theCallback()
}

callBackFunciton(function() {
    console.log('I have been called!')
})


// ---------------------Call - Apply - Bind-------------------- //


var randomPerson = {
    firstName: 'Jo',
    lastName: 'na Hill',
    getFullName: function() {
        var fullName = this.firstName + this.lastName
        return fullName
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged ' + this.getFullName())
    console.log('Arguments: ' + lang1 + ' ' + lang2)
    console.log('------------------------------')
}

var logPersonName = logName.bind(randomPerson)

logPersonName()

logName.call(randomPerson, 'en', 'es')

logName.apply(randomPerson, ['en', 'es'])

// Function Borrowing

var randomPerson2 = {
    firstName: 'Lepud',
    lastName: ' Shepud'
}

console.log(randomPerson.getFullName.apply(randomPerson2))

// Function Currrying

function multiply(a, b) {
    return a * b
}

var multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))



// ---------------------Functional Programming-------------------- //


// Without functional programming

var dummyArr1 = [1, 2, 3]

var dummyArr2 = []
for(var i=0; i <  dummyArr1.length; i++) {
    dummyArr2.push( dummyArr1[i] * 2)
}

console.log(dummyArr2) 



// With funcitonal programming

function mapForEach(arr, fn) {
    var newArr = []
    for(var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr
}

var arr1 = [1, 2, 3]

var arr2 = mapForEach(arr1, function(item) {
    return item * 2
})

console.log(arr2)

var arr3 = mapForEach(arr1, function(item) {
    return item > 2
})

console.log(arr3)

var checkPastLimit = function(limiter, item) {
    return item > limiter
}

var arr4  = mapForEach(arr1, checkPastLimit.bind(this, 1))
console.log(arr4)

// Simplified with functional programming and callback

var limitMakerFunc = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, 1)
}


var arr5  = mapForEach(arr1, limitMakerFunc(1))

console.log(arr5)