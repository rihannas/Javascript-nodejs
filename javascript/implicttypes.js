//implicit type conversions

// this concatenates the variables b/c both are string types
const fistName = 'sarah'
const lastName = 'woo'
let fullName = fistName + ' ' + lastName
console.log('Hey I\'m ' + fullName);

// this adds the variables b/c both are int types
const num1 = 7
const num2 = 3
const result1 = num1 + num2
console.log(result1);

// but this doesn't add the variables but concatenates b/c both are string types
const num3 = '7'
const num4 = '3'
const result2 = num3 + num4
console.log(result2);

/* 
this doesn't add the variables but concatenates b/c one of the variables is string type
- this behaviour can lead to potential bugs, if not careful
so make sure the types are the same.
*/
const num7 = 7
const num8 = '3'
const result4 = num7 + num8
console.log(result4);


/* 
this subs the variables even tho they are string types:
- javascript does things under the hood to convert the variables 
to ints so it can work with them.
- js does if the variables are string types and the operations are:
    -, *, /, % 
*/
const num5 = '7'
const num6 = '3'
const result3 = num5 - num6
console.log(result3);
