const array = [1, 2, 3, 4, 5, 1];

const removeDuplicates = (arr = []) => {
    return arr.filter((val, idx, array) => {
        return array.indexOf(val) === idx;
    })
}
// console.log(removeDuplicates(array));


const remove = (arr=[]) => {
    console.log('aa',typeof new Number);
    return [...new Set(arr)]
}

console.log(remove(array));
