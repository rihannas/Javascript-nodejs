// variables to be exported for sayHi function
// to be able to use the variables in another file we need to export it

const lala = "lala";
const po = "po";
const secret = "po is cute";


// when you export you can choose what to export and not
// exports is an object, so things are stored as key-value pair--
// if the key & value are the same, we don't add the key.
// plus this is one way of importing, we can even do:
// exports.module = lala
// exports.module = po

module.exports = {lala: "lala", po};
