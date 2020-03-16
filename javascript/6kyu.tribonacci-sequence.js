const _ = require('lodash');

const tribonacci = (xs, n) => (n <= 3)
    ? ( (n<3) ? _.take(xs, n) : xs)
    : tribonacci(_.concat(xs, _(xs).takeRight(3).sum()), n - 1);