// forEach method 

// const numbers = [2,4,6,8,10,12];

// numbers.forEach(function(number, index){
//     console.log(number*2, index);
// })


// realistic example *******************************
const objInsideArray = [
    {id:1, name: "Shuaib Khan", gender:"male"},
    {id:2, name: "Mark Khan", gender:"male"},
    {id:3, name: "Elon Khan", gender:"male"},
    {id:4, name: "Jeff Khan", gender:"male"},
    {id:5, name: "Shahid Khan", gender:"male"},
    {id:6, name: "zia Khan", gender:"male"},
]


objInsideArray.forEach((person)=>{
    console.log(person.name);
})