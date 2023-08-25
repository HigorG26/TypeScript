"use strict";
//============================================================================
// 1 - VOID
//============================================================================
function semRetorno() {
    console.log("Não retorna nada");
}
//============================================================================
// 2 - CALLBACK COMO ARGUMENTO
//============================================================================
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando função...");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Higor");
//============================================================================
// 3 - GENERIC FUNCTION
//============================================================================
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["a", "b", "c", "d", "e"]));
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObj = mergeObject({ name: "Higor", cpf: 12345678900 }, { surName: "Gabriel", age: 20, job: "Programmer" });
console.log(newObj);
//============================================================================
// 4 - CONSTRAINTS
//============================================================================
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 2));
console.log(biggestNumber("a", "b"));
//============================================================================
// 5 - ESPECIFICADOR DE PARAMETROS
//============================================================================
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["um", "dois", "três"]));
//============================================================================
// 6 - PARAMETRO OPCIONAIS
//============================================================================
function optionParams(nome, surname) {
    return surname ? nome + " " + surname : nome;
}
console.log(optionParams("Higor"));
console.log(optionParams("Higor", "Gabriel"));
