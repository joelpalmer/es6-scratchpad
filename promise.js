const postpone = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms); 
    });
}

postpone(2000).then(() => { 
    console.log('2 seconds have passed')
});