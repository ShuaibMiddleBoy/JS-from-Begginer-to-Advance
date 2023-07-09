const person = {
    name : "Shuaib",
    age : 23,
    gender : "male"
}

// console.log(person.name);
// console.log(person["name"]);

// person["name"] = "Asad";
// console.log(person);


// Difference between Dot and bracket Notion
// const person1 = {
//     name : "Shuaib",
//     age : 23,
//     gender : "male",
//     "my hobbies" : ["cricket", "fashion"]
// }

// console.log(person1["my hobbies"]);
// console.log(person1."my hobbies");  wrong 



// const key = "email";


// const person2 = {};

// person2[key] = "skhan.csit@gmail.com";
// console.log(person2);





// how to iterate Object 
//  two ways:  
//  for in loop
//  Object.keys()



// const person1 = {
//     name : "Shuaib",
//     age : 23,
//     gender : "male",
//     hobbies : ["cricket", "fashion"]
// }


// console.log(person1["age"]);

// for(let key in person1){
//     // console.log(key);
//     console.log(person[key]);
// }



// const person1 = {
//     name : "Shuaib",
//     age : 23,
//     gender : "male",
//     hobbies : ["cricket", "fashion"]
// }



// console.log(Object.keys(person1));

// for(let key of Object.keys(person1)){
//     console.log(person1[key]);
// }



// compute properties 


const key1 = "email";
const key2 = "gender"
const key3 = "name"; 

const value1 = "skhan.csit@gmai.com";
const value2 = "male";
const value3 = "Shuaib khan";

const person5 = {
    [key1] : value1,
    [key2] :  value2
}

person5[key3] = value3
console.log(person5);