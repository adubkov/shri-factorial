function sum_factorial_list(n) {

  var f = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];

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
    while (m.length) isf += f[m.pop()];
    return isf == n;
  }

  var sumFact = [];
  while (n--) if (isSumFactorial(n)) sumFact.push(n);
  return sumFact;

}
