
// class CreateUser{
//     constructor(firstName, age){
//         this.firstName = firstName,
//         this.age = age
//     }

//     about(){
//         console.log(`I am ${this.firstName} and i am ${this.age} year old`);
//     }
// }

// const User1 = new CreateUser("Shuaib", 23);
// // console.log(User1);
// console.log(Object.getPrototypeOf(User1));



// ****************************************************************************
// inheritence 

// class Animals{
//     constructor(name, age, meal){
//         this.name = name;
//         this.age = age,
//         this.meal = meal
//     };
//     eat(){
//         return `I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
//     }
// }

// class Dog extends Animals{}
// const dog = new Dog("DOG", 4, "meat");
// console.log(dog.eat());


// ****************************************************************************
// super()


// class Animals{
//     constructor(name, age, meal){
//         this.name = name;
//         this.age = age,
//         this.meal = meal
//     };
//     eat(){
//         return `I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
//     }
// }

// class Dog extends Animals{
//     constructor(name, age, meal, run){
//         super(name, age, meal);
//         this.run = run
//     }

//     eat(){
//         return `Modified Eat: I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
//     }
//     Isrun(){
//         return `i am ${this.name} and i am run so ${this.run}`
//     }
// }

// const dog = new Dog("DOG", 4, "meat", "fast");
// console.log(dog.Isrun());
// console.log(dog.eat());
// console.log(Object.getPrototypeOf(dog));




// ****************************************************************************
// getter and setter


// class Animals{
//     constructor(name, age, meal){
//         this.name = name;
//         this.age = age,
//         this.meal = meal
//     };
//     eat(){
//         return `I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
//     }
// }

// class Dog extends Animals{
//     constructor(name, age, meal, run){
//         super(name, age, meal);
//         this.run = run
//     }

//     eat(){
//         return `Modified Eat: I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
//     }
//     get Isrun(){
//         return `i am ${this.name} and i am run so ${this.run}`
//     }

//     set Isrun(isrun){
//         const [name, run] = isrun.split(" ");
//         this.name = name;
//         this.run = run
//     }

//     // change(name, age){
//     //     this.name = name,
//     //     this.age = age
//     // }
// }

// const dog = new Dog("DOG", 4, "meat", "fast");
// // console.log(dog.Isrun);
// // console.log(dog.eat());
// // console.log(Object.getPrototypeOf(dog));
// // console.log(dog.name);
// // console.log(dog.age);
// // dog.change("Tommy", 1);
// // console.log(dog.name);
// // console.log(dog.age);
// // dog.name = "Bobby";
// // dog.age = 2;
// dog.Isrun = "joki fast"
// console.log(dog.Isrun);


// ****************************************************************************
// static method and properties


class Animals{
    constructor(name, age, meal){
        this.name = name;
        this.age = age,
        this.meal = meal
    };

    static key = "value";
    static about(){
        return "Hello ABout"
    }
    eat(){
        return `I am ${this.name}, my age is ${this.age}, i eat ${this.meal} `
    }
}

console.log(Animals.about());