const getBracketIndex = function(str: string, i: number) {
  let cnt: number = 0;
  for (; i<str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') cnt++;
    else if (str[i] === ')' || str[i] === ']' || str[i] === '}') cnt--;
    
    if (cnt === 0) return i;
  }
  return str.length;
}

const getNumber = function(str: string, i: number) {
  if (!('0' <= str[i] && str[i] <= '9')) return [1, i];
  
  str = str.substring(i);
  const num = /[0-9]*/.exec(str)[0];
  return [parseInt(num), i + num.length];
}

const parse = function(formula: string, coef: number): any {
  let result = {};
  
  for (let i = 0; i < formula.length; i++) {
    if (formula[i] === '(' || formula[i] === '[' || formula[i] === '{' ) {
      const idx = getBracketIndex(formula, i);
      const [num, next] = getNumber(formula, idx+1);
      const subResult = parse(formula.substring(i+1, idx), num);
      
      for (let x in subResult) {
        if (result[x] === undefined) result[x] = 0;
        result[x] += subResult[x] * coef;
      }
      
      i = next - 1;
    } else {
      let elem: string = /[A-Z][a-z]*/.exec(formula.substring(i))[0];
      let [num, next] = getNumber(formula, i+elem.length);
      
      if (result[elem] === undefined) result[elem] = 0;
      result[elem] += num * coef;
      
      i = next - 1;
    }
  }
  return result;
}

export function parseMolecule(formula: string) {
  return parse(formula, 1);
}
