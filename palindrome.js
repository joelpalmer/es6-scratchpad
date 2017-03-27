const arrayOfWords = ["joel", "pup", "zig", "poop", "sis"];

const palindromes = arrayOfWords.filter((item) => {
    return item === item.split('').reverse().join('');
})

console.log(palindromes);