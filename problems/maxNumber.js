const numbers = [1,2,4,5,6,9,0];

const findMax = (numbers=[]) => {
    return Math.max(...numbers)
}
console.log(findMax(numbers));
