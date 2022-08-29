//objects

/*
Objects in javascript are collection of properties, which are called keys.
The keys have values. Note: between the properties you need a comma.
Objects also have functions which are called methods
*/

const person = {
    name: 'Tom',
    lastName: 'IV',
    age: 400,
    education: false,
    married: true,
    children: ['anna', 'ru', 'bob'],
    greeting: function () {
        console.log('Hi I\'m Tom');
    }
}

// we can access by using the object's name followed by dot. then the key (like how dict are accessed in python)
console.log(person.name);
console.log(person.children[0]);

person.greeting() // we use () to invoke the function

// we can change the key from outside the object
person.age = 65

console.log(person.age);

// or you can save the key in a varible 

const marriageStatus = person.married
console.log(marriageStatus);
