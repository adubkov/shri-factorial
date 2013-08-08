function sum_factorial_list(n) {

  var f = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];

  function isSumFactorial(num) {
    var isf = 0, n = num;
    while (n) {
      isf += f[(n % 10)];
      n = ~~(n / 10);
    }
    return isf == num;
  }

  var sumFact = [];
  while (n--) if (isSumFactorial(n)) sumFact.push(n);
  return sumFact; 

}
