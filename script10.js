
// const objInsideArray = [
//     {id:1, name: "Shuaib Khan", gender:"male"},
//     {id:2, name: "Shuaib Khan", gender:"male"},
//     {id:3, name: "Shuaib Khan", gender:"male"},
//     {id:4, name: "Shuaib Khan", gender:"male"},
//     {id:5, name: "Shuaib Khan", gender:"male"},
//     {id:6, name: "Shuaib Khan", gender:"male"},
// ]

// const [{id, name},{gender}, obj3, obj4, obj5, obj6] = objInsideArray;

// console.log(name);
// for(let obj of objInsideArray){
//     console.log(obj.name);
// }


// function  isEven(number) {
//     if(number%2 === 0){
//         return true
//     }else{
//         return false;
//     }
// }

// console.log(isEven(13));


// function myFunc(str){
//     console.log(str[0]);
// }

// myFunc("Shuaib")

// function myFunc(arr, target){
//     if(arr.includes(target)){
//         return target
//     }
//     return false;
// }

// const result = myFunc(["Shuaib", "asad", "zia"], "asads");
// console.log(result);

// const myFunc = () => {
//     console.log("Hello");
// }

// myFunc()
    // let firstName = "Shuaib Khan";


// {
    
// let firstName = "Hashir";
//     {
// console.log(firstName);
//     }
    
// }


// rest parameters ***********************************************************************

// const addAll = (...add) => {
//     let total = 0;
// for(ele of add){
//     total = total + ele;
// }
// console.log(total);
// }

// addAll(1,2,3,4,5,6,7);




// parameters destructuring *********************************************************************
// const person = {
//     name : "Shuaib",
//     age : 23,
//     gender : "male"
// }

// const myFunc = ({name, age, gender}) => {
//     console.log(name);
//     console.log(age);
//     console.log(gender);
// }

// myFunc(person)


// callback function **********************************************

// function myFunc1(callback){
//     console.log("I AM FUNCTION 1");
//     callback()
// }
// function myFunc2(){
//     console.log("I AM FUNCTION 2");
// }
// myFunc1(myFunc2);



// function return function ********************************************

// function myFunc(){
//     return function(){
//         return "Hello WOrld"
//     }
// }


// let ans = myFunc();
// ans = ans();
// console.log(ans);




// const func = (a, b , ...c) => {
//    return  `${a}, ${b}, ${c}`;
// }

// console.log( func(1,2,3,4,5,6));


// const obj1 = {
//     message: "Hello"
// }

// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2);

// obj2.message = "Good";

// const obj3 = {
//     message : "Good"
// }

// console.log(obj1===obj3);


// const person = {
//     name : "Shuaib",
//     age : 23,
//     gender : "male"
// }

// const myFunc = ({name, age, gender}) => {
//     console.log(name, age, gender);
// }

// myFunc(person);


// const arr = [2,4,6,8,10,12];

// const myFunc = (number, index) => {
//     console.log(`index is ${index}`);
//     console.log(`${number}*2 = ${number*2}`);

// }



// for(let i=0; i<arr.length; i++){
//     myFunc(arr[i], i)   
// }



// const myFun1 = () => {
//     console.log("I AM FUNCTION 1");
//     myFun2()
// }

// const myFun2 = () => {
//     console.log("I AM FUNCTION 2");
// } 

// myFun1(myFun2)
// console.log(myFun1(myFun2));




// const numbers = [2,4,6,8,10,12];

// numbers.forEach(function(number, index){
//     console.log(number*2, index);
// })



const objInsideArray = [
    {id:1, name: "Shuaib Khan", gender:"male"},
    {id:2, name: "Shuaib Khan", gender:"male"},
    {id:3, name: "Shuaib Khan", gender:"male"},
    {id:4, name: "Shuaib Khan", gender:"male"},
    {id:5, name: "Shuaib Khan", gender:"male"},
    {id:6, name: "Shuaib Khan", gender:"male"},
]

// objInsideArray.forEach((obj)=>{
//     console.log(obj.name);
// })


// const result = objInsideArray.map((person)=>{
//     return `id:${person.id} My name is ${person.name}`
// })

// console.log(result);


// const numbers = [1,2,3,4,5];
// const result = numbers.filter((num)=>{
//     return num>5;
// })

// console.log(result);

// const result = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// })

// console.log(result);



const card = [
    {productID:1, productName:"Mobile", price:50000},
    {productID:1, productName:"remote", price:2000},
    {productID:1, productName:"laptop", price:100000},
    {productID:1, productName:"Mobile", price:23000},
    {productID:1, productName:"tv", price:35000},
]

const result = card.reduce((acc, currentVal)=>{
    return acc+currentVal.price;
},0)

console.log(result);
