// variables
/*
Variable Naming Rules:
- can contain digits, letters, underscore, $ sign
- must start with a letter, $ or underscore
- variables are case senstive
- for 2 word variables: use camelCasing or underscore
*/

const user = "mona lisa"
let address, zip, country;
address = '222 pasta street'
zip = '2022'
country = 'wakanda'
console.log(user);
console.log(address, zip, country);

/*
    LET VS CONST VS VAR
- const: doesn't allow to reassign values
- let: updated version of var, which you can reaasign values
- var: old way to define a vraible

*/

// concatenate a string

const fistName = 'sarah'
const lastName = 'woo'
let fullName = fistName + ' ' + lastName
console.log('Hey I\'m ' + fullName)

const website = 'google'
const url = 'http://www.' + website + '.com'
console.log(url)