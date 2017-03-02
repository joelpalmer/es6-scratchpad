const dodgers = [['Kershaw', 22],['Seager', 5]];
dodgers.forEach(([name, number]) => {
    console.log(name+ ' ' +number);
});

const giants = [{name: 'MadBum', number: 40}, {name: 'Posey', number: 28}];

giants.forEach(({name, number})=> {
    console.log(name+ ' ' +number);      
});