// не удаляйте следующую строчку, без нее проект не соберётся
// eslint-disable-next-line
Function.prototype.bind = function (context) {
    // method is attached to the prototype, so just refer to it as this.
    var func = this;
    var previousArgs = [].slice.call(arguments, 1);
    return function () {
        var currentArgs = [].slice.call(arguments);
        var combinedArgs = [].concat(previousArgs, currentArgs);
        return func.apply(context, combinedArgs);
    };
};
var F = function () {
    console.log('foo is', this.foo);
};
var F1 = F.bind({ foo: 'bar' });
F(); // foo is undefined
F1(); // foo is bar
var f = new F(); // foo is undefined
var f1 = new F1(); // foo is bar
console.log(f instanceof F); // true
console.log(f1 instanceof F); // false 
