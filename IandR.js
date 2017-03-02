const iterableObject = {
    [Symbol.iterator]() {
        const data = ['Go', 'Dodgers'];
        let index = 0;
        return {
            next() {
                if (index < data.length) {
                    return {
                        value: data[index++]
                    };
                } else {
                    return {done: true};
                }
            }
        };
    }
}
for (const x of iterableObject) {
    console.log(x);
}

const baseballTeam = {
    name: "Dodgers",
    League: "National",
    Skipper: "Dave Roberts",
    pitchers: ["Kershaw", "Hill", "Maeda"],
    playBall:  ()=> {
        return "playBall";
    }
}

console.log(Reflect.ownKeys(iterableObject));
console.log(Reflect.ownKeys(baseballTeam));
console.log(baseballTeam.playBall());


