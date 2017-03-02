//es5 self or that = this 

function Multiply(multiplicand) {
    this.multiplicand = multiplicand;
}

Multiply.prototype.productArray = function(arr) {
    var that = this; //get around this shadowing
    return arr.map(function(multiplier) {
        return that.multiplicand * multiplier;
    });
};

var m = new Multiply(6);
console.log(m.productArray([2, 3, 6]));

//es6 style with class and fat arrow, hooray for lexical scope!
class MultiplyES6 {
    constructor(multiplicand) {
        this.multiplicand = multiplicand;
    }
    productArray(arr) {
        return arr.map((multiplier) => { //We can remove (), {} & return but I'm not ready to give those up
            return this.multiplicand * multiplier;
        });
    }
}

const n = new MultiplyES6(6);
console.log(n.productArray([2, 3, 6]));