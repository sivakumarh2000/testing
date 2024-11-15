// console.log("2",userName);


// {
//     var userName = "siva";
//     console.log(userName);

// }

// console.log("2",userName); 


// IIFE
// (() =>{
//     console.log('This is an IIFE!');
//   })(); // Output: "This is an IIFE!"


// Call : Invokes a function with a specified this value and arguments
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
//   const user = { name: 'Alice' };
//   greet.call({ name: 'Alice' }, 'Hello'); // "Hello, Alice"

//   greet.apply(user, ['Hello']); // "Hello, Alice"

//   const greetUser = greet.bind(user, 'Hey');
//   greetUser(); // "Hey, Alice"


// const promise1 = Promise.resolve(3);
// const promise2 =  Promise.reject(4);
// Promise.all([promise1, promise2])
//   .then(values => console.log(values))// [3, 'foo']
//   .catch(err => console.log(err)
//   )



// const arr1 = [1, 2, 3,4];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
// const arr3 = [...new Set([...arr1,4,5,1,2])]


// console.log('arr2',arr2);
// console.log('arr3',arr3);


const pro = new Promise((res,rej) => {
    // return 1
    // res(1)
    rej(2)
});
pro.then(res => console.log('ress', res))
    .catch(err => console.log('err', err))



