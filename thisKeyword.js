// "use strict"
// function myFunc(){
// console.log(this.myFuc);
// }

// window.myFunc();


// function func(){
//     console.log(this);
// }

// window.func();


function func2(){
    console.log(this);
}


const obj = {
    about: func2
};

obj.about();