function sum_factorial_list(n) {

  function factorial(n) {
    var f = 1;
    while (n) f *= n--;
    return f;
  }

  function split(n) {
    nArr = [];
    while (n) {
      nArr.push(n % 10);
      n = ~~(n / 10);
    }
    return nArr;
  }

  function isSumFactorial(n) {
    var m = split(n), isf = 0;
    while (m.length) isf += factorial(m.pop());
    return isf == n;
  }

  var sumFact = [];
  while (n--) if (isSumFactorial(n)) sumFact.push(n);
  return sumFact;

}

console.log(sum_factorial_list(1000000));
