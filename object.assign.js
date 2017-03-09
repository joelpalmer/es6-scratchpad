class MyObject {
    constructor({height, width}) {
        Object.assign(this, {height, width});
    }
}

const m = new MyObject({height:14, width:12});
console.log(m);
const x = Object.is(NaN,NaN);
console.log(x);