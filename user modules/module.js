var m1 = require('./m1'); // creating object of the sub module
m1.relay(); //calling the function from another module
setTimeout(m1.longjump,2000); //calling the function from another module with parameterised setTimeout function.