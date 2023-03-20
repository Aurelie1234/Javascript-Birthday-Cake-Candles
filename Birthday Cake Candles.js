function birthdayCakeCandles(candles) {
    // Write your code here
let tallestCandles = 0;
let maxHeight = Math.max(...candles);


for (let i = 0 ; i < candles.length; i++) {
    if (maxHeight == candles[i]) tallestCandles++
}
return tallestCandles
}
