function sum() {
    const args = Array.isArray(arguments[0])? arguments[0] : [...arguments];
    return args.reduce((total, num)=> {
        return total + num;
    })
}

console.log(sum(5, 5, 5));
console.log(sum([5, 5, 5]));
console.log(sum([5, 15, 5]));