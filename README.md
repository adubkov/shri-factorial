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

## Comment
Cache of calculated factorials isn't used because in this case we've fast calculation factorial for fixed numbers (0 to 9).
Most likely should use array of predefined values - [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ].
