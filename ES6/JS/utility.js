export function add(a,b){
    return a+b;
}

export function square(a){
    return a*a;
}

/*
The Temporal Dead Zone (TDZ) in JavaScript refers to the period between 
the entering of a scope and the actual declaration of a variable, 
during which the variable cannot be accessed. This concept is particularly 
relevant for variables declared with let and const.
*/

export function testTDZ(){ //TDZ starts
    console.log(x); // ReferenceError: x is not defined
    let x = 10;   //tdz ends here
    console.log(x) //Output

    console.log(b);
    let b=100;
    console.log(b);

}
//export {add,square};