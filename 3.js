// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function getPrimeFactors(num = 600851475143) {
  let i = 2;
  let primeFactors = [];

  while (num !== 1) {
    if (num % i === 0) {
      primeFactors.push(i);
      while (num % i === 0) {
        num /= i;
      }
    }
    i++;
  }

  return primeFactors;
}

function getLargestPrimeFactor(num = 600851475143) {
  let primeFactors = getPrimeFactors(num);
  return primeFactors[primeFactors.length - 1];
}