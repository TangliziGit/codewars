const helper = (rest, n) => {
  switch (true) {
    case rest < 0:    return -1;
    case rest === 0:  return n -1;
    default:          return helper(rest - n*n*n, n + 1);
  }
};

const findNb = (n) => helper(n, 1);