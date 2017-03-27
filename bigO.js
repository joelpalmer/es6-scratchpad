//Constant-Time Algorithm
//O(1) - "Order 1"

const getLast = (items) => {
    return items[items.length -1];
};

console.log(getLast(["a", "b", "c"]));
console.log(getLast(["a", "b", "c", "D"]));

// Linear-Time Algorithm
// O(N) — “Order N”
// In this order, the worst case time (iterations) grows on par with the number of items.
// In other words, for N elements we will require N iterations.

const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++)
        if (items[i] === match) {
            return i;
        }
    return -1;
};

const array = ["a", "b" , "c", "d"];    
console.log(findIndex(array, "a"));
console.log(findIndex(array, "d"));
console.log(findIndex(array, "e"));

// Quadratic-Time Algorithm

// O(N 2 ) — “Order N squared”

//For this kind of order, the worst case time (iterations) is the square of the number of inputs. 
//The time grows exponentially related to the number of inputs.

const buildSquareMatrix = (items) => {
    let matrix = [];
    for (let i =0, total = items.length; i < total; i++) {
        matrix[i] = [];
        for (let j=0, total = items.length; j < total; j++)
            matrix[i].push(items[j]);
    }
    return matrix;
}

console.log(buildSquareMatrix(["a", "b", "c"]));
const m = buildSquareMatrix(["a", "b", "c"]);
//debugger;


