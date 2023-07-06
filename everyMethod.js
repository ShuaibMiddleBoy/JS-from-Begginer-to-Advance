// every method *******************************
// const numbers = [2,4,6,8,10,12,14,16];

// const result = numbers.every((number)=>{
//     return number%2===0;
// })
// console.log(result);



// realistic example ***********************


const Users = [
    {productID:1, productName:"Mobile", productPrice:"1300"},
    {productID:2, productName:"Mobile", productPrice:"3100"},
    {productID:3, productName:"Mobile", productPrice:"5200"},
    {productID:4, productName:"Mobile", productPrice:"2000"},
    {productID:5, productName:"Mobile", productPrice:"4500"},
]

const result = Users.every((user)=>{
    return user.productPrice > 1000;
})

console.log(result);