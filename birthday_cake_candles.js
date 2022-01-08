function birthdayCakeCandles(candles) {
    let tallestCandleCount = 0;
    let tallestCandle = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallestCandle) {
            tallestCandle = candles[i];
        }
    }
    
    for (let j = 0; j < candles.length; j++) {
        if (candles[j] == tallestCandle) {
            tallestCandleCount++;
        }
    }
    
    return tallestCandleCount;
}
