const reverse = (s) => {
    return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

console.log(reverse("Jud"));

const reverseViaArray = (s) => {
    return s.split('').reverse().join('');
}

console.log(reverseViaArray("Joel"));

