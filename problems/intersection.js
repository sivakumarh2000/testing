const arr1 = [1, 2, 3, 4];
const arr2 = [1, 5, 6, 7];

const findIntersection = (arr1 = [], arr2 = []) => {
    return arr1.filter((val) => {
       return arr2.includes(val)
    })
}


console.log(findIntersection(arr1,arr2));
