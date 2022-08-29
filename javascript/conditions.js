// conditional statments
// >, <, >=, <=, ==, ===, !=, !==
// == checks only value
// === checks value and type
// != checks only value
// !== checks value and type
// logical operators: (|| - or), (&& - and)

const pet1 = 'cat'
const pet2 = 'dog'

if (pet1 === 'cat') {
    console.log('meow')
} else if (pet2 === 'dog') {
    console.log('woof')
} else {
    console.log('crickets')
}

// swicth
const dice = 3

switch (dice) {
    case 1:
        console.log('you got 1');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    default:
        console.log('try again');

}