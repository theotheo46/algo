/**
var F = function() {
  console.log('foo is', this.foo);
}
var F1 = F.bind({ foo: 'bar' })

F()               // foo is undefined
F1()              // foo is bar

var f = new F()   // foo is undefined
var f1 = new F1() // foo is bar

console.log(f instanceof F)    // true
console.log(f1 instanceof F)   // false
*/

// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
Function.prototype.bind = function(context: unknown, ...args)  {
    let func = this;
    // eslint-disable-next-line
    return function (...newArgs) {
      func.apply(context, [...args, ...newArgs]);
    };
  };

           // foo is bar
  
