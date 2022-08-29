//arrays

const pets = ['cat', 'dog', 'frog', 'rat', 'bird', 'hamster', 'sheep', 7, null, undefined]

//if you try to access an index that's not in the array, you will get undefined
let newPet = pets[0]
console.log(newPet)

pets[4] = 'chicken'
console.log(pets)