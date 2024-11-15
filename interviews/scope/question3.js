// var x = 20;

// function foo() {
//   console.log(x);
//   var x = 10;
// }

// foo();

// ****************************************

// function foo() {
//   console.log(x);
//   x = 10;
//   console.log(x);
// }

// foo();

// console.log(1 < 2 < 3); // 1 < 2 = true -> 1 -> 1 < 3 -> Ans: true

// console.log(3 > 2 > 1); // 3 > 2 = true -> 1 -> 1 > 1 -> Ans: false


// const foo = () => {
//     console.log(this.name);

// }

// foo.call({name: "siva"})

// {
//     let tt = 99
//     gg = 0
// }
// console.log(gg)


function calculateTotalPrice(cart) {
    // Your code here

    let sum = 0;
    for (let value of Object.values(cart)) {
        console.log('value',value);
        sum += value;
    }
      return sum;


}

// Example usage
const cart = { apple: 2, banana: 1, orange: 3 };
console.log(calculateTotalPrice(cart)); // 6