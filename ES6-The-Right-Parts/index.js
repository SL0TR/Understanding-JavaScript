// Arrow Functions

x = () => console.log('arrow functions!');

x();


// Promise and This
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      console.log('Normal functions! ' + this.id)
    }.bind(this),1000);
  }

};

obj.foo(); // underfined without bind


var obj2 = {
  id: 42,
  foo: function foo() {
    setTimeout(() => {
      console.log('arrow functions! ' + this.id)
    },1000);
  }
};

obj2.foo(); // underfined without bind