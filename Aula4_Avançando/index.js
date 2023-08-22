"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4, 5];
let teste = numbers.push(2); // adicionar um indice no final
console.log(teste);
console.log(numbers[3]);
const nomes = ["Higor", "Heloisa", "Hian"];
console.log(nomes);
// 2 - outra intaxe de array
const nums = [10, 20, 30, 40, 50];
console.log(nums);
// 3 - any ??????
const anny = [1, "teste", true, [], { nome: "Higor" }]; //EVITAR
console.log(anny);
// 4 - prametros tipados
function soma(a, b) {
    console.log("Soma:", a + b);
}
soma(6, "7");
// 5 - retorno de função 
function hello(name) {
    return `Olá ${name}`;
}
console.log(hello("Higor"));
