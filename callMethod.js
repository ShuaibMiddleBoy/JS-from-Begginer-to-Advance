console.log("Hello");

// call method 

// first example *****************************************************
// const user1 = {
//     name : "Shuaib",
//     age : 23,
//     about : function(hobbies){
//         console.log(`${this.name}, ${this.age} ${hobbies}`);
//     }
// }

// const user2 = {
//     name : "Naeem",
//     age : 22
// }

// user1.about.call(user2, "Coding");



// second example 
// function about(hobbies){
//     console.log(`${this.name}, ${this.age} ${hobbies}`);
// }


// const user1 = {
//     name : "Naeem",
//     age : 22
// }


// const user2 = {
//     name : "Asad",
//     age : 20
// }


// about.call(user2, "Football");



// bind Method 
// bind method same to bind method but just we use parameters in array 


function about(hobbies, refrences){
    console.log(`${this.name}, ${this.age} ${hobbies} ${refrences}`);
}


const user1 = {
    name : "Naeem",
    age : 22
}


const user2 = {
    name : "Asad",
    age : 20
}


about.apply(user2, ["Football", "laeeq ahmad"]);

