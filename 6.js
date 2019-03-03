function diffSquareSums(limit = 100) {
  let sumOfSquares = 0;
  let squareOfSum = 0;
  for (let i = 1; i <= limit; i++) {
    squareOfSum += i;
    sumOfSquares += Math.pow(i, 2);
  }
  squareOfSum = Math.pow(squareOfSum, 2);

  return squareOfSum - sumOfSquares;
}