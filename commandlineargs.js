// Addition
var a = parseInt(process.argv[2]);  //parseInt is used to convert string to integer
var b = parseInt(process.argv[3]); 
var Add = a+b;
console.log("result of addition is " + Add);

// Subtraction
var a = parseInt(process.argv[2]); 
var b = parseInt(process.argv[3]); 
var Sub = a-b; 
console.log("result of Subtraction  is " + Sub);

//Multiplication
var a = parseInt(process.argv[2]); 
var b = parseInt(process.argv[3]); 
var Mul = a*b; 
console.log("result of Multiplication  is " + Mul);

//Divison
var a = parseInt(process.argv[2]); 
var b = parseInt(process.argv[3]); 
var Div = a/b; 
console.log("result of  divison  is " + Div);

//Modulus
var a = parseInt(process.argv[2]); 
var b = parseInt(process.argv[3]); 
var Mod = a%b; 
console.log("result of Modulus  is " + Mod);
