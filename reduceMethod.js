// reduce method **********************************

// const numbers = [12,43,54,23,65,34,83,64];

// const result = numbers.reduce((acc, currentValue)=>{
//     return acc + currentValue;
// }, 0)

// accumulator        currentValue     return
// 0          +       12              12
// 12         +       43              55
// 55         +       54              109
// 109        +       23              132
// 132        +       65              197
// 197        +       34              231
// 231        +       83              314
// 314        +       64              378
 

// console.log(result);


// realistic example ***********************
const card = [
    {productID:1, productName:"Mobile", price:50000},
    {productID:1, productName:"remote", price:2000},
    {productID:1, productName:"laptop", price:100000},
    {productID:1, productName:"Mobile", price:23000},
    {productID:1, productName:"tv", price:35000},
    {productID:1, productName:"clothes", price:1000},
]

const result = card.reduce((acc, currentVal)=>{
    return acc+currentVal.price;
},0)

console.log(result);