// splice method 
// start , delete , insert 


const arr = ["item1", "item2", "item3", "item4"];

// delete
// const result = arr.splice(1, 2);
// console.log(arr);
// console.log(result);


// insert
// arr.splice(1, 0,"inserted item 1", "inserted item 2");
// console.log(arr);


// insert and delete 
arr.splice(1, 2, "inserted item 1", "inserted item 2");
console.log(arr);