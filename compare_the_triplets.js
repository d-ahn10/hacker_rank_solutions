function compareTriplets(a, b) {
    const scoreBoard = [0,0];
    
    for (let i = 0; i < a.length, i < b.length; i++) {
        if (a[i] > b[i]) {
            scoreBoard[0]++;
        } else if (a[i] < b[i]) {
            scoreBoard[1]++;
        }
    }
    return scoreBoard;
}
