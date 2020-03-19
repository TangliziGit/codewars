const duplicateEncode = (word) => {
  const dict = word.toLowerCase().split('')
    .reduce((acc, x) => {
      acc[x] = (acc[x] || 0);
      acc[x] += 1;
      return acc;
    }, {});
  
  return word.toLowerCase().split('')
    .map(x => dict[x]==1?'(':')')
    .join('');
}
