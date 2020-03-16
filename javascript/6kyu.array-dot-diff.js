const helper = (arr, set) => arr
  .filter(x => !set.has(x))
  
const arrayDiff = (a, b) => helper(a, new Set(b))