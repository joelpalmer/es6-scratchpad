const outer = (outerVal) => {
    return function inner(innerVal) {
        console.log(`${outerVal} ${innerVal}`)
    }
}

outer("Joel")("Michelle");
