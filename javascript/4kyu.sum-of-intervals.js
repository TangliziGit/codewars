const sumIntervals = (intervals) => intervals
  .sort((a, b) => a[0] - b[0])
  .reduce((acc, x) => {
    let inter = acc.slice(-1)[0];
    
    if (inter !== undefined && x[0] < inter[1])
      inter[1] = Math.max(inter[1], x[1]);
    else
      acc.push(x);
      
    return acc;
  }, [])
  .map(x => x[1] - x[0])
  .reduce((sum, x) => sum+x);