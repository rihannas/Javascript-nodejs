// invoking the fuction sayHi
// to use the functions and variables we created, we need to import it
// when import modules we made, we need to specify there locations too
const names = require('./2-modules-names');
const sayHi = require('./2-modules-function');

//if we console log names, we will get the object exports--
//{lala: 'lala', po: 'po'}

sayHi('dipsey');
// sayHi(po);
// sayHi(lala);
// This ^ will give you 'is not defined errors, so--
// you have to either do const {lala, po}, when importing or--
// remember names is an object, whic h you means you acces the values with keys-- 
// like names.lala & names.po

sayHi(names.lala);
sayHi(names.po);
