function miniMaxSum(arr) {
    arr.sort(function(a, b){return a-b});
    
    let min = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        min += arr[i];
    }
    
    for (let j = 1; j < arr.length; j++) {
        max += arr[j];
    }
    
    console.log(min + ' ' + max);
}
