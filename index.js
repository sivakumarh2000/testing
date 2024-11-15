
// foo()
// {
//     let v = 9
// }
// let foo = 4
// debugger
function foo(){
    var v = 0
    console.log("IM foo")
}
// foo()
// console.log(v);

// "IM foo
//"IM foo
let arr = []
// console.log(name);
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
// console.log(typeof arr);

// var a = 1
// function bar () {
//     var a = 2
//     function again(){
//         var a = 3
//         console.log(a);
        
//     }
//     again()
//     console.log(a);
    
// }
// bar()
// console.log(a);



function Person(name, age){
this.name =name

this.age = age
}

let p = new Person("kumar", 34)
console.log(p.age);


function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
      }
    };
  }
  
  let person = createPerson("John", 30);
  person.greet(); // Outputs: Hello, my name is John and I'm 30 years old.

  createPerson.prototype.d = 45
  console.log(createPerson());

  function a(a,b){
    return a+b
  }
  
  
  setTimeout(()=>{
    console.log("start");
    
  },0)
  console.log("End");
  new Promise(() => {
    console.log('1111');
    
  })
  console.log("macro task 2");
  
  // end
  // start
  // macro task 2
  // 1111

//   end
// macro task 2
// 1111
// start