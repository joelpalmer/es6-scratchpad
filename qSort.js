const qSort = (arry) => {
    if (arry.length === 0) {
        return [];
    }
    let left = [], right =[], pivot = arry[0];
    for (let i=1; i< arry.length; i++) {
        if(arry[i] < pivot) {
            left.push(arry[i]);
        } else {
            right.push(arry[i]);
        }
    };

    return [...qSort(left), pivot, ...qSort(right)];
}

const g = qSort(["b", "l", "c", "a"]);
debugger;