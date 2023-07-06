// some method ***********************************

// const numbers = [2,4,6,8,9,12,14,16];
// const result = numbers.some((num)=>{
//     return num%2!==0;
// })

// console.log(result);



// realistic example *****************
const users = [
    {productID:1, productName:"Mobile", price:50000},
    {productID:1, productName:"remote", price:2000},
    {productID:1, productName:"laptop", price:200000},
    {productID:1, productName:"Mobile", price:23000},
    {productID:1, productName:"tv", price:35000},
    {productID:1, productName:"clothes", price:1000},
]


const result = users.some((user)=> user.price > 100000);
console.log(result);
