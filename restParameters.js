// Rest Parameters 

// const fruits = ["Apple", "Mango", "Banana", "Peach", "Watermelon"];

// const [fruit1,fruit2, ...newArr] = fruits;
// console.log(newArr);


const obj = {
    name : "Shuaib",
    age : 22,
    gender : "male",
    qualification : "Web developer"
}

const {name, age:a, ...rest} = obj;
 console.log(rest);


