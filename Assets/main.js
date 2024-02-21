function Power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * Power(base, exponent - 1);
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function maxDigit(num) {
  let max = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit > max) {
      max = digit;
    }
    num = Math.floor(num / 10);
  }
  return max;
}

function isPrime(number) {
  if (number <= 1) {
    return "Не простое";
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "Не простое";
    }
  }
  return "Простое";
}

function printFactors(number) {
  let factors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  if (factors.length == 1) return factors.join("*") + "*1";
  return factors.join("*");
}

function fibonacci(n) {
  let a = 1,
    b = 0,
    temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}
