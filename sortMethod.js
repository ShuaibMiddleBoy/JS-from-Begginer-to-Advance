// for ascending order ********************************
// const numbers = [465, 234, 542, 128, 923, 345];
// numbers.sort((a,b)=>a-b);
// console.log(numbers);


// for descending order ********************************
// const numbers = [465, 234, 542, 128, 923, 345];
// numbers.sort((a,b)=>b-a);
// console.log(numbers);



// realistic example ************************************
const card = [
    {id:1, productName:"p1", price:"5000"},
    {id:2, productName:"p2", price:"3000"},
    {id:3, productName:"p3", price:"4000"},
    {id:4, productName:"p4", price:"6000"},
    {id:5, productName:"p5", price:"7000"},
]


// const toLow = card.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// })


const toHigh = card.slice(0).sort((a,b)=>{
    return b.price-a.price;
})

console.log(toHigh);