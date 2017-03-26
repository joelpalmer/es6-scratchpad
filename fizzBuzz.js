const fizzBuzz = (range) => {
    for (let i = 0; i <= range; i++) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;

        if (fizz && buzz) {
            console.log("fizzbuzz");
        } else if (fizz) {
            console.log("fizz");
        } else if (buzz) {
            console.log("buzz");
        } else {
            console.log(i);
        }

    }

}

fizzBuzz(100);