// console.log(a);
// var a = 5; // undefined
// let a = 5; // ReferenceError: Cannot access 'a' before initialization

// console.log(name); // name is present in the window or browser environment



function sayHii() {
    console.log(name);
    console.log(age);
    var name = "siva";
    let age = 21;
}

// sayHii()



// console.log('aaa',!!!'krish');
// console.log('bbb',+true);

// const bird = {
//     size: 'small',
//   };

//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };


//   console.log('aa',mouse[bird.size]);


// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let c = { greeting: 'Hey!' };
// let d;

// d = {...c };

// c.greeting = 'Hello';
// console.log(d.greeting);
// console.log(c.greeting);


// const obj = {
//     name: "siva",
//     age: 24,
//     gender: "male",
//     address: {
//         pincode: "601203"
//     }
// }

// Object.freeze(obj);
// Object.defineProperty(obj, "name", { writable: false })


// obj["name"] = "krish";

// console.log('obj', obj);


// const obj = {
//     name: "siva",
//     age: 24,
//     gender: "male",
//     address: {
//         pincode: "601203"
//     }
// }

// let d = {...obj };
// let d = structuredClone(obj)

// obj.address.pincode = 123;
// console.log(d.address.pincode)


// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// function bark() {
//     console.log('Woof!');
//   }

// bark.animal = 'dog';
// console.log(bark.animal);

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }