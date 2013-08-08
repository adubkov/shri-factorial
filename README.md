# SHRI-Factorial

Question #13 in [SHRI 2013] (http://company.yandex.ru/job/vacancies/shri_2013.xml)

Write the function on JavaScript, which shows list of numbers, which equal sum of their own factorial.

Example:
4! + 0! + 5! + 8! + 5! = 40585

## Result
```
> sum_factorial_list(1000000);

[ 40585, 145, 2, 1, 0 ]
```

## Comments
Cache of calculated factorials isn't used because in this case we've fixed number of factorials [0-9], that we use array of predefined values:
````
[ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ]
```

So we can just remove factorial calculation function and focus on our objectives:

```
  /*  Remove  */
  function factorial(n) {
    var f = 1;
    while (n) f *= n--;
    return f;
  }
```
