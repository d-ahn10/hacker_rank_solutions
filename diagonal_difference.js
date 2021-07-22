function diagonalDifference(arr) {
    const arrLen = arr.length;
    let diagSumA = 0;
    let diagSumB = 0;
    
    for (let i = 0; i < arrLen; i++) {
        diagSumA += arr[i][i];
        diagSumB += arr[i][arrLen-i-1];
    }
    
    return Math.abs(diagSumA - diagSumB);
}
