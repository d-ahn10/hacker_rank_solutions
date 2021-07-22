function plusMinus(arr) {
    const table = {
        'pos': 0,
        'neg': 0,
        'zero': 0
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            table['pos']++;
        } else if (arr[i] <  0) {
            table['neg']++;
        } else {
            table['zero']++;
        }
    }
    
    console.log((table['pos']/arr.length).toFixed(5));
    console.log((table['neg']/arr.length).toFixed(5));
    console.log((table['zero']/arr.length).toFixed(5));
}
