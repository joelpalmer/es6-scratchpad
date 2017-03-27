const arr = Array.from(Array(12).keys());

arr.forEach((el, i) => {
    setTimeout(() => {
        console.log(`The index for ${el} is ${i}`);
    }, 3000*i)
});

//console.log(arr);