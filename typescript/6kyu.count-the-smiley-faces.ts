//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
    return arr.filter(x=>/^[;:][-~]?[)D]$/.test(x)).length;
}