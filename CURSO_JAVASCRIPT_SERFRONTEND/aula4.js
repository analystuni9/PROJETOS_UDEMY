// strings, number (int,float), boolean
// undefined, null, symbol(ES2015);

// nas minhas variaveis posso usar letras, numeros simbolos
let variavel = "minha string com aspas duplas";
let variavel2 = 'minha string com aspas simples';
var variavel3 = `minha string com template literal`;
console.log(variavel);
let idade = 40;
let msg = "eu tenho " + idade + " anos";
let msg2 = `eu tenho ${idade} anos`;
console.log(msg);
console.log(msg2);
console.log("hello " + "world");
console.log(typeof msg);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1} `);
console.log(`o tipo de n2 ${typeof n2} é seu valor é ${n2}`);

// Boolean possue apenas 2 valores ou true ou false
const isValid = true
console.log(`isValid ${isValid}`);

let test = null;
console.log(test);
console.log(typeof test);
test = 10;
console.log(typeof test);

