/*
ES6 provides a new operator called spread operator that consists of three dots (...). 
The spread operator allows you to spread out elements of an iterable object 
such as an array, map, or set.
The spread operator can be used to clone an iterable object or merge iterable objects into one.*/

const odd = [1,3,5,7,9];
const even = [2,4,6,8,10];
const all = [...odd, ...even]; //concatenate arrays
console.log(all); // Output: [1, 3, 5, 7,2,4,6,8,10]

const combined=[100,200,300, ...even]; //... operator unpacks  array
console.log(combined); // Output: [100, 200, 300, 2,4,6,8,10]
const combined1=[...odd,333,222,111];
console.log(combined1); // Output: [1, 3, 5, 7,9,333,222,111]

/* Rest Parameter (...)  -- packs elements into array. used in functions.
It is used to pass variable no. of arguements to function*/

function display(num1,num2, ...args){ // packs elements into array args
    console.log(num1,num2,args);
}

display(300,400,66,77,88,99,1000);
display(30,40,66,80,54);
display(10,20);