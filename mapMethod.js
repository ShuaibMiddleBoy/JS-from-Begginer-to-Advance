// map methods 


// const number = [1,2,3,4,5,6,7,8];

// const result = number.map((num)=>{
//     console.log(num);
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


const result = objInsideArray.map((person)=>{
    return `id:${person.id} My name is ${person.name}`
})

console.log(result);
