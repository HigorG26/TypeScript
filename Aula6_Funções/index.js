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
