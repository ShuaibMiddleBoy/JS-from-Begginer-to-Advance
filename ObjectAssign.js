// Object.assign we use for to clone a object 

const obj1 = {
    name : "Shuaib Khan",
    age : 23
}

// const obj2 = obj1;
// const obj2 = {...obj1};  spread operator
const obj2 = Object.assign({}, obj1);
obj1["gender"] = "male"
console.log(obj1);
console.log(obj2);