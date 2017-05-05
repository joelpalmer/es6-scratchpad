const words = ["Joel", "boob", "poop", "Crayon"];

const palindromes = words.filter((w) => {
    return w === w.split("").reverse().join("");
})

console.log(palindromes);
