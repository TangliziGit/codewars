const digital_root = (n) => n<10 ? n: digital_root(
  n.toString().split('')
    .map(x => parseInt(x))
    .reduce((acc, x) => acc + x)
);