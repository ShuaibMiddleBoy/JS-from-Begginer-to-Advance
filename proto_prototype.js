// const obj1 = {
//     name : "Shuaib Khan",
//     age : 23
// }

// const obj2 = Object.create(obj1);
// console.log(obj2.age);


function createUser(firstName, lastName, age, email, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

const user1 = createUser("Shuaib", "Khan", 23, "skhan.csit@gmail.com", "Pakistan, Kp");
createUser.prototype.about = function(){
    return `My name is ${this.name} and i am ${this.age} year old`
}
createUser.prototype.hobbies = ['Cricket', "Traveling", "Coding"]
console.log(user1);