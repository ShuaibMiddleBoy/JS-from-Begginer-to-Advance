// find method *****************************
// const names = ["shuaib", "asad", "zia", "abdur-rehman", "sir"];

// const result = names.find((str)=>{
//     return str.length === 3;
// })

// console.log(result);




// realistic example ***********************

const card = [
    {product_id:1, product_name:"Shuaib"},
    {product_id:2, product_name:"asim"},
    {product_id:3, product_name:"abdur-rehman"},
    {product_id:4, product_name:"umar"},
    {product_id:5, product_name:"asad"},

]

const result = card.find((param)=>{
    return param.product_id === 3;
})

console.log(result);