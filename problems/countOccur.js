const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countOccurences = (fruits=[]) => {

    let counts = {};

    fruits.map((item) => {
        console.log('item',item);
        
        // console.log('aa',counts[item]);
        
        counts[item] = (counts[item] || 0) +1
    })

    return counts;
   
    
}
console.log(countOccurences(fruits));
