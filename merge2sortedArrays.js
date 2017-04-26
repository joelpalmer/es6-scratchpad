const data = {
    items: [[{
            name: "Joel",
            location: "Texas",
            Sport: "Running",
            Id: 5
        },
        {
            name: "Michelle",
            location: "California",
            Sport: "Stroller Strides",
            Id: 7
        },
        {
            name: "Liam",
            location: "Alabama",
            Sport: "Playing",
            Id: 1
        },
        {
            name: "Dusty",
            location: "Oregon",
            Sport: "Fetch",
            Id: 15
        }
    ],
    [
        {
            name: "Bob",
            location: "California",
            Sport: "Running",
            Id: 51
        },
        {
            name: "Kelly",
            location: "New York",
            Sport: "Stroller Strides",
            Id: 71
        },
        {
            name: "Leslie",
            location: "Washington",
            Sport: "Playing",
            Id: 11
        },
        {
            name: "Randy",
            location: "Oregon",
            Sport: "Fetch",
            Id: 151
        }
    ],
    ],

}
const merged = (arrays) => {
    return arrays.items.reduce((prev, curr) => {
            return prev.concat(curr);
    }, []).sort((a, b) => {
        return a.Id - b.Id;
        //for strings: a.location > b.location
    });
}

console.log(merged(data));

//if the arrays are already sorted then you can simply concat them.
