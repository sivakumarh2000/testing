// async function foo() {
//     return "Hello world";
// }

// const result = foo();
// result.then((res) => console.log(res))
// console.log(result);


// console.log([1,2] == [1,2]);


// const user1 = {
//     name: 'john',
//     age: 25,
//     address: {
//         city: 'Mumbai',
//         state: 'Mahrashtra'
//     },
// }
// // const user2 = user1;
// const user2= JSON.parse(JSON.stringify(user1));
// user2.name = 'Ramesh'
// user2.address.city = 'Pune'

// console.log(user1)

// console.log('user2',user2);


// const arr = [0, 1, 2, 3, 4, 5, 6];

// const filteredArray = arr.filter((e) => e < 3).map((e) => e * 5)
// console.log('filteredArray', filteredArray);

// const modifyArray = arr.map((e) => {
//     return e*5
// })
// console.log('modifyArray',modifyArray);




const changeName = () => {
    const myName = "hi i am siva";
    const newName = myName.split(" ");

    const mapName = newName.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ")
    console.log('mapName', mapName);


}
changeName()