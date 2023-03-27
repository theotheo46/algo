/**
    take([1, 2, 3]); // => [1]
    take([1, 2, 3], 2); // => [1, 2]
    take([1, 2, 3], 5); // => [1, 2, 3]
    take([1, 2, 3], 0); // => []

    const testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]]
    const testErrCase2 = [1, [1], '1', true]

    for (let i = 0; i<4; i++) {
      try {
        take(testErrCase1[i], testErrCase2[i])
      }
      catch(err) {
        console.log(err.toString()) // ValidationError: bad value
      }
     }
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError"; // (2)
        return _this;
    }
    ValidationError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return ValidationError;
}(Error));
function take(list, num) {
    if (!Array.isArray(list)) {
        throw new ValidationError('bad value');
    }
    if (!(list && list.length)) {
        return [];
    }
    var n;
    if (num === undefined) {
        n = 1;
    }
    else {
        if (typeof (num) !== 'number') {
            throw new ValidationError('bad value');
        }
        else {
            n = num;
        }
    }
    return baseSlice(list, 0, n < 0 ? 0 : n);
}
console.log(take([1, 2, 3])); // => [1] 
console.log(take([1, 2, 3], 2)); // => [1, 2] 
console.log(take([1, 2, 3], 5)); // => [1, 2, 3] 
console.log(take([1, 2, 3], 0)); // => []
var testErrCase1 = [123, [1, 2, 3], [1, 2, 3], [1, 2, 3]];
var testErrCase2 = [1, [1], '1', true];
for (var i = 0; i < 4; i++) {
    try {
        console.log(take(testErrCase1[i], testErrCase2[i]));
    }
    catch (err) {
        console.log(err.toString()); // ValidationError: bad value
    }
}
