"use strict";
//============================================================================
// 1 - arrays
//============================================================================
let numbers = [1, 2, 3, 4, 5];
let teste = numbers.push(2); // adicionar um indice no final
console.log(teste);
console.log(numbers[3]);
const nomes = ["Higor", "Heloisa", "Hian"];
console.log(nomes);
//============================================================================
// 2 - outra intaxe de array
//============================================================================
const nums = [10, 20, 30, 40, 50];
console.log(nums);
//============================================================================
// 3 - any ??????
//============================================================================
const anny = [1, "teste", true, [], { nome: "Higor" }]; //EVITAR
console.log(anny);
//============================================================================
// 4 - prametros tipados
//============================================================================
function soma(a, b) {
    console.log("Soma:", a + b);
}
soma(6, "7");
//============================================================================
// 5 - retorno de função
//============================================================================
function hello(name) {
    //o segundo ":string" bloqueia outro tipo de retorno além do tipo STRING
    return `Olá ${name}`;
}
console.log(hello("Higor"));
//============================================================================
// 6 - FUNÇÃO ANONIMA
//============================================================================
setTimeout(function () {
    const sallary = 10000;
    //console.log(parseFloat(sallary))
}, 2000);
//============================================================================
// 7 - TIPOS DE OBJETO
//============================================================================
function passCoordinates(coord) {
    console.log("Coordenadas");
    console.log("X:", coord.x);
    console.log("Y:", coord.y);
}
const objCoord = { x: 15550, y: 8546541 };
passCoordinates(objCoord);
//============================================================================
// 8 - tópicos condicionais
//============================================================================
function showNumbers(a, b, c) {
    a ? console.log(a) : console.log("Não tem nada no A");
    b ? console.log(b) : console.log("Não tem nada no B");
    c ? console.log(c) : console.log("Não tem nada no C");
}
showNumbers(1, 2, 3);
showNumbers(6);
//============================================================================
// 9 - VALIDAÇÃO DE ARGUMENTO OPCIONAL
//============================================================================
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá , ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Higor", "Gabriel"));
console.log(advancedGreeting("Higor"));
//============================================================================
// 10/11 - AVANÇADO/UNION TYPE
//============================================================================
function showBalance(balance) {
    if (typeof balance == "number") {
        return console.log(`O saldo da conta é de: R$${balance}`);
    }
    return console.log(`O saldo da conta é de: ${balance} de reais`);
}
showBalance(100000);
showBalance("Um milhão");
function showId(id) {
    if (typeof id == "number") {
        return console.log(`ID: ${id} (Number)`);
    }
    return console.log(`ID: ${id} (String)`);
}
showId(2);
showId("2");
function showCoord(obj) {
    console.log(`X: ${obj.x}\nY: ${obj.y}\nZ: ${obj.z}\nLocal: ${obj.local}`);
}
const coordObj = {
    x: -14545,
    y: 516552,
    z: -558456,
    local: "Rua Nolina"
};
showCoord(coordObj);
const somePerson = { name: "Higor", age: 20 };
console.log(somePerson);
//============================================================================
// 15 - LITERAL TYPES
//============================================================================
let test = "testando";
test = "testado";
console.log(test);
function showDirection(direction) {
    console.log(`Direção escolhida: ${direction}`);
}
showDirection("left");
showDirection("right");
showDirection("center");
//============================================================================
// 16 - NON NULL ASSERTION OPERATORS
//============================================================================
const p = document.getElementById("p");
console.log(p?.innerText); //O OPERADOR ! == TEXTO_DO_HTML | NULL
//============================================================================
// 17 - BIGINT
//============================================================================
let N;
N = 1000n;
console.log(typeof N, "\n", N);
//============================================================================
// 18 - SYMBOL 
//============================================================================
let symbolA = Symbol("a"); // ANNOTATION
let symbolB = Symbol("b"); //INFERÊNCIA
console.log(symbolA, "\n", symbolB);
