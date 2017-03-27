
// Logarithmic-Time Algorithm
// O(log n) — “Order log N”

const quickSort = (list) => {
    if (list.length < 2) return list;

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i=1, total=list.length; i < total; i++) {
        switch (true) {
            case (list[i] < pivot): 
                left.push(list[i]);
                break;
            case (list[i] >= pivot):
                if(list[i])
                right.push(list[i]);
                break;
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
};

const a = quickSort( ['q','a','z','w','s','x','e','d','c','r']);
debugger;