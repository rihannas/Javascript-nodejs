// functions
/*
the placeholders are called:
- parameters: when the function is being declared
- arguments: when the function is being invoke
*/


// to declare a function we need use 'function' keyword
function sayHi(name){
    console.log(`Hi ${name}`);
}

// to use a function you need to invoke it (like calling with brackets)
sayHi('sam');

sayHi('ru');

sayHi('ken');

// you can pass multiple params
function pickColor(frist, second, thrid){
    console.log('i like ' + frist);
    console.log('i like ' + second);
    console.log('i like ' + thrid);
}

// you can save the values as variables
const first = 'blue'
const second = 'pink'
const third = 'lilac'

// and pass the variable arguments
pickColor(first, second, third)


/*
All functions return undefined by default. This doesn't mean all functions should return.
The returning depends on the function. If the function returns it doesn't return undefined.

*/

// create a function that converts inch to cm -> 1 inch 2.54 cm

function convert(value){
    const result = value * 2.54;
    return result;
}

const width = convert(50);
const length = convert(100);

const dimensions = [width, length];
console.log(dimensions);


/*
we can store functions in variables, these are called function expression
Doing this helps if you want to use arrow functions
Or like exporting functions
*/
function multiplyNumbers(num1, num2){
    return num1 * num2
}

// now you can remove the functions name if you want
const multiply = function (num1, num2){
    return num1 * num2
}

// now the varible will be called as how the function we would be called
const product = multiply(2, 2);
console.log(product);