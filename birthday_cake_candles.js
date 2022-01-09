function birthdayCakeCandles(candles) {
    let tallestCandleCount = 0;
    let tallestCandle = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallestCandle) {
            tallestCandle = candles[i];
            tallestCandleCount = 1;
        } else if (candles[i] === tallestCandle) {
            tallestCandleCount++;
        }
    }
    return tallestCandleCount;
}
