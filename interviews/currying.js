// function add(a, b, c) {
//     return a + b + c;
//   }
  
//   console.log(add(1, 2, 3)); // Output: 6
  

function add(a){
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

const sub = (a) => {
    return (b) => {
        return (c) => {
            return c-b-a;
        }
    }
}

// console.log(add(1)(2)(3));
console.log(sub(1)(2)(4));


(() => {
console.log('IIFE');

})()