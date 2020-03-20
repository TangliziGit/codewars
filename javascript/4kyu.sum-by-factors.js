const _ = require('lodash');

const sumOfDivided = (lst) => {
  let isPrime = new Array(8000).fill(true);
  let primes = [];
  
  for (let p=2; p<isPrime.length; p++) if (isPrime[p]) {
    primes.push(p);
    for (let i=2; i*p<isPrime.length; i++)
      isPrime[p*i] = false;
  }
  
  const solve = (res, x) => {
    const num = x;
    for (let p of primes) if (x%p == 0) {
        res[p] = (res[p] || 0) + num;
        while (x%p == 0) x/=p;
    }
    return res;
  }
  
  const result = lst.reduce(solve, {});
  return _.zip(
    Object.keys(result).map(x => +x),
    Object.values(result)
  );
}
 