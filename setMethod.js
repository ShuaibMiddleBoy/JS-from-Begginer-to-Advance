// Set (it is iterable)
// Store Data 
// Sets also have have own methods 
// No index based access
// Order is not gauranted 
// Unique items only (no duplicated allowed) 

const numbers = new Set([1,2,3,4,5,6,7,8]);
// const numbers = new Set("Shuaib");
numbers.add(9);

// if(numbers.has(6)){
//     console.log("6 is included");
// }else{
//     console.log("6 is not included");
// }

// for(let number of numbers){
//     console.log(number);
// }


// find the lenth of the set items 
let length = 0;
for(let number of numbers){
length++;
}
console.log(length);


// console.log(numbers);