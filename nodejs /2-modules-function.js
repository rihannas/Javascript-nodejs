// function that says hi + name
// to be able to use the function in another file we need to export it


function sayHi(name){
    console.log(`hi ${name}`);
}

module.exports = sayHi;