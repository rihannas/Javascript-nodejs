// loops

// for loops not to run forever you need to change the condition

/*
while loop:
While something is true: do this
*/

// we use let because we want the variable to change
let amount = 10;
while (amount > 0) {
    console.log(`I have ${amount} dollars so I can go shopping`);
    amount--;
}

/*
do while:
Do something, while this is true
*/

let money = 0;
do {
    console.log(`I have ${amount} dollars so I can go shopping`);
    money++;
} while(money < 10)

/*
for loop:
for this condition is true, do the following
*/

let i;
for (i = 0; i < 10; i++) {
    console.log(i * i);
}

for (let number = 10; number >= 0; number--) {
    console.log(number)
}